import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyListPage } from './property-list';

@NgModule({
  declarations: [
    PropertyListPage,
  ],
  imports: [
    IonicPageModule.forChild(PropertyListPage),
  ],
  exports: [
    PropertyListPage
  ]
})
export class ProeprtyListPageModule {}
