import { Injectable } from '@angular/core';

export interface PaymentBase {
  pay(): void;
  clearPayment(): void;
}

@Injectable()
export class PaymentBaseService implements PaymentBase {
  #paymentDetails = { amount: 0, address: '' };

  get paymentDetails() {
    return this.#paymentDetails;
  }

  set paymentDetails(paymentDetails: { amount: number; address: string }) {
    this.#paymentDetails = paymentDetails;
  }

  pay(): void {
    throw new Error('Method not implemented.');
  }

  clearPayment() {
    this.#paymentDetails = { amount: 0, address: '' };
  }
}
