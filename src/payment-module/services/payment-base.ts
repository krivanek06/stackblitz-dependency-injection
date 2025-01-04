export interface PaymentBase {
  pay(): void;
  clearPayment(): void;
}

export abstract class PaymentBaseService implements PaymentBase {
  #paymentDetails = { amount: 0, address: '' };

  get paymentDetails() {
    return this.#paymentDetails;
  }

  set paymentDetails(paymentDetails: { amount: number; address: string }) {
    this.#paymentDetails = paymentDetails;
  }

  abstract pay(): void;

  clearPayment() {
    this.#paymentDetails = { amount: 0, address: '' };
  }
}
