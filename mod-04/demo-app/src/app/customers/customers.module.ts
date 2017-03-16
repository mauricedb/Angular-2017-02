import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { BlinkDirective } from './blink.directive';
import { AapjePipe } from './aapje.pipe';
import { CustomersService } from './customers.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CustomersService],
  declarations: [
    CustomerListComponent,
    BlinkDirective,
    AapjePipe
  ],
  exports: [CustomerListComponent]
})
export class CustomersModule { }
