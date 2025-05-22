import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Alert, AlertDocument } from './schemas/alert.schema';
import { CreateAlertDto } from './dto/create-alert.dto';

@Injectable()
export class AlertsService {
  constructor(@InjectModel(Alert.name) private readonly alertModel: Model<AlertDocument>) {}

  async create(createAlertDto: CreateAlertDto): Promise<Alert> {
    const newAlert = new this.alertModel(createAlertDto);
    return newAlert.save();
  }

  async findAll(): Promise<Alert[]> {
    return this.alertModel.find().exec();
  }

  async findOne(id: string): Promise<Alert | null> {
    return this.alertModel.findById(id).exec();
  }

  async update(id: string, updateAlertDto: CreateAlertDto): Promise<Alert | null> {
    return this.alertModel.findByIdAndUpdate(id, updateAlertDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Alert | null> {
    return this.alertModel.findByIdAndDelete(id).exec();
  }
}