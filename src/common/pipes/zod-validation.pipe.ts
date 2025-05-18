import { PipeTransform, Injectable, BadRequestException, Type } from '@nestjs/common';
import { ZodSchema, ZodError } from 'zod';

interface ZodValidationPipeOptions {
  /**
   * The expected type of the value.
   * This is used to improve the error message.
   */
  expectedType?: string;
  
  /**
   * Whether to transform the value to the expected type.
   * @default true
   */
  transform?: boolean;
  
  /**
   * Whether to disable error messages.
   * @default false
   */
  disableErrorMessages?: boolean;
}

/**
 * A pipe that validates the input value against a Zod schema.
 * 
 * @example
 * ```typescript
 * @Post()
 * createUser(@Body(new ZodValidationPipe(userSchema)) createUserDto: CreateUserDto) {
 *   return this.usersService.create(createUserDto);
 * }
 * ```
 */
@Injectable()
export class ZodValidationPipe<T = any> implements PipeTransform<T> {
  private readonly options: ZodValidationPipeOptions;

  constructor(
    private readonly schema: ZodSchema<T>,
    options?: ZodValidationPipeOptions,
  ) {
    this.options = {
      transform: true,
      disableErrorMessages: false,
      ...options,
    };
  }

  /**
   * Validates the value against the schema.
   * @param value The value to validate.
   * @returns The validated value.
   * @throws BadRequestException if validation fails.
   */
  async transform(value: T): Promise<T> {
    if (value === null || value === undefined) {
      throw new BadRequestException('No payload provided');
    }

    try {
      let schemaToUse = this.schema;
      
      // Only apply strict() if transform is false and the schema supports it
      if (!this.options.transform && 'strict' in schemaToUse) {
        schemaToUse = (schemaToUse as any).strict() as ZodSchema<T>;
      }
      
      const result = await schemaToUse.parseAsync(value);
      return result;
    } catch (error) {
      if (error instanceof ZodError) {
        const validationErrors = this.formatZodError(error);
        throw new BadRequestException({
          statusCode: 400,
          message: 'Validation failed',
          errors: this.options.disableErrorMessages ? undefined : validationErrors,
          error: 'Bad Request',
        });
      }
      
      // Re-throw unexpected errors
      throw error;
    }
  }

  /**
   * Formats Zod validation errors into a more readable format.
   * @param error The ZodError instance.
   * @returns Formatted error messages.
   */
  private formatZodError(error: ZodError): Record<string, string[]> {
    const formattedErrors: Record<string, string[]> = {};
    
    error.errors.forEach((err) => {
      const path = err.path.join('.');
      const message = err.message;
      
      if (!formattedErrors[path]) {
        formattedErrors[path] = [];
      }
      
      formattedErrors[path].push(message);
    });
    
    return formattedErrors;
  }

  /**
   * Creates a new instance of the pipe with the given schema and options.
   * This is useful for inline usage with the `@UsePipes` decorator.
   * 
   * @example
   * ```typescript
   * @Post()
   * @UsePipes(ZodValidationPipe.create(userSchema, { expectedType: 'User' }))
   * createUser(@Body() createUserDto: CreateUserDto) {
   *   return this.usersService.create(createUserDto);
   * }
   * ```
   */
  static create<T>(
    schema: ZodSchema<T>,
    options?: ZodValidationPipeOptions,
  ): Type<PipeTransform> {
    class SchemaSpecificPipe extends ZodValidationPipe<T> {
      constructor() {
        super(schema, options);
      }
    }
    
    return SchemaSpecificPipe;
  }
}
