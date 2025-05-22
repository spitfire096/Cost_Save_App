import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Budget, BudgetDocument } from './schemas/budget.schema';
import { CreateBudgetDto } from './dto/create-budget.dto';

@Injectable()
export class BudgetsService {
  constructor(@InjectModel(Budget.name) private readonly budgetModel: Model<BudgetDocument>) {}

  async create(createBudgetDto: CreateBudgetDto): Promise<Budget> {
    const createdBudget = new this.budgetModel(createBudgetDto);
    return createdBudget.save();
  }

  async findAll(): Promise<Budget[]> {
    return this.budgetModel.find().exec();
  }

  async findOne(id: string): Promise<Budget | null> {
    return this.budgetModel.findById(id).exec();
  }

  async update(id: string, updateBudgetDto: CreateBudgetDto): Promise<Budget | null> {
    return this.budgetModel.findByIdAndUpdate(id, updateBudgetDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Budget | null> {
    return this.budgetModel.findByIdAndDelete(id).exec();
  }
}