import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpCode,
  ParseUUIDPipe,
  Req,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CreateUserDto,
  UpdateUserDto,
  ResetPasswordDto,
  createUserSchema,
  updateUserSchema,
  resetPasswordSchema,
} from './schemas/user.schema';
import { SuperAdminGuard } from '../auth/guards/superadmin.guard';
import { ZodValidationPipe } from '../../common/pipes/zod-validation.pipe';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller({ path: 'users', version: '1' })
@UseGuards(JwtAuthGuard, SuperAdminGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(
    @Body(new ZodValidationPipe(createUserSchema)) createUserDto: CreateUserDto,
  ) {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(new ZodValidationPipe(updateUserSchema)) updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Put(':id/reset-password')
  resetPassword(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(new ZodValidationPipe(resetPasswordSchema))
    resetPasswordDto: ResetPasswordDto,
  ) {
    return this.usersService.resetPassword(id, resetPasswordDto);
  }

  @Get()
  async findAll(
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = 10,
  ) {
    const { users, metadata } = await this.usersService.findAll(offset, limit);
    return {
      success: true,
      data: users,
      metadata,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Req() req: any) {
    const user = await this.usersService.getMyProfile(req.user.user_id);
    return {
      succcess: true,
      data: user,
    };
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.remove(id);
  }
}
