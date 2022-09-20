import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../types/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  async create(createUserDto: any) {
    return await new this.userModel({
      ...createUserDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateUserDto: any) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
  }

  async delete(id: string) {
    return await this.userModel.findByIdAndDelete(id).exec();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(id: string) {
    return await this.userModel.findById(id).exec();
  }
}
