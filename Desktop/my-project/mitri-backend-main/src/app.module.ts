import { Module } from '@nestjs/common';
import { UserModule } from '@modules/user/user.module';
import { default as config } from './configs/env.config';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://cad:cad@cluster0.rnppq0v.mongodb.net/backend-database',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
