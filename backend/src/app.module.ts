import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ContactModule } from './modules/contact/contact.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UserModule, ContactModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
