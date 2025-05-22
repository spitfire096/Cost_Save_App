import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CostsModule } from './costs/costs.module';
import { BudgetsModule } from './budgets/budgets.module';
import { AlertsModule } from './alerts/alerts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://domeji14:mKjsWN2t51U83Gio@cluster0.fdo4bvz.mongodb.net/'),
    CostsModule,
    BudgetsModule,
    AlertsModule,
    AuthModule,
  ],
})
export class AppModule {}