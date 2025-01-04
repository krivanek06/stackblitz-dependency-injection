import { Injectable } from '@angular/core';
import { PaymentBaseService } from './payment-base';

@Injectable({
  providedIn: 'root',
})
export class VenmoService extends PaymentBaseService {
  pay() {
    console.log('Paying with Venmo');
    super.clearPayment();
  }
}
