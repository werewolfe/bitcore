import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FooterComponentModule } from '../../components/footer/footer.module';
import { HeadNavComponentModule } from '../../components/head-nav/head-nav.module';
import { LoaderComponentModule } from '../../components/loader/loader.module';
import { TransactionComponentModule } from '../../components/transaction/transaction.module';
import { TransactionPage } from './transaction';

@NgModule({
  declarations: [TransactionPage],
  imports: [
    IonicPageModule.forChild(TransactionPage),
    TransactionComponentModule,
    FooterComponentModule,
    HeadNavComponentModule,
    LoaderComponentModule
  ],
  exports: [TransactionPage]
})
export class TransactionPageModule {}
