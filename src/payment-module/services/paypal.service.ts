import { Injectable } from '@angular/core';
import { PaymentBaseService } from './payment-base';

@Injectable({
  providedIn: 'root',
})
export class PaypalService extends PaymentBaseService {
  constructor() {
    super();
    console.log('PaypalService created');
  }

  override pay() {
    console.log('Paying with PayPal');
    super.clearPayment();
  }
}
