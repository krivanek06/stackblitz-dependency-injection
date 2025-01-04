import { Injectable } from '@angular/core';
import { PaymentBaseService } from './payment-base';

@Injectable({
  providedIn: 'root',
})
export class StripeService extends PaymentBaseService {
  pay() {
    console.log('Paying with Stripe');
    super.clearPayment();
  }
}
