import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ description: 'The name of a student' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'The code of a student' })
  @IsString()
  @IsNotEmpty()
  studentCode: string;

  @ApiProperty({ description: 'The status of a student' })
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}

export class UpdateStudentDto {
  @ApiPropertyOptional({ description: 'Student name' })
  name?: string;

  @ApiPropertyOptional({ description: 'Student status' })
  isActive?: boolean;
}
