import { Injectable } from '@angular/core';
import { PaymentBaseService } from './payment-base';

@Injectable({
  providedIn: 'root',
})
export class PaypalService extends PaymentBaseService {
  pay() {
    console.log('Paying with PayPal');
    super.clearPayment();
  }
}
