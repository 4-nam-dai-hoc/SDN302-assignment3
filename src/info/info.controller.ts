import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Student Info')
@Controller('info')
export class InfoController {
  @Get()
  getInfo() {
    return {
      data: {
        fullName: 'Hồ Trọng Nghĩa',
        studentCode: 'QE170173',
      },
    };
  }
}
