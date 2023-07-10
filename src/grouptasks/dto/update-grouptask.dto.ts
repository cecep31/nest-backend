import { PartialType } from '@nestjs/mapped-types';
import { CreateGrouptaskDto } from './create-grouptask.dto';

export class UpdateGrouptaskDto extends PartialType(CreateGrouptaskDto) {}
