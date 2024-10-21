import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { InfoModule } from './info/info.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    StudentsModule,
    InfoModule,
  ],
})
export class AppModule {}
