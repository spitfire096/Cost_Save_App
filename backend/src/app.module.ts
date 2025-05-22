import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CostsModule } from './costs/costs.module';
import { BudgetsModule } from './budgets/budgets.module';
import { AlertsModule } from './alerts/alerts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    CostsModule,
    BudgetsModule,
    AlertsModule,
    AuthModule,
  ],
})
export class AppModule {}