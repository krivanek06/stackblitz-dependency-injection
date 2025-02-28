import { ChangeDetectionStrategy, Component, inject, Injector } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import { PaypalService } from './paypal.service';
import { StripeService } from './stripe.service';
import { VenmoService } from './venmo.service';

@Component({
  selector: 'app-page-payment',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatRadioGroup,
  ],
  template: `
    <form class="grid gap-2 w-[450px]" [formGroup]="form" (ngSubmit)="onSubmit()">
      <!-- payment amount -->
      <mat-form-field appearance="fill">
        <mat-label>Amount</mat-label>
        <input matInput type="number" [formControl]="form.controls.amount" placeholder="Enter amount" />
        <mat-icon matSuffix>attach_money</mat-icon>
      </mat-form-field>

      <!-- payment address -->
      <mat-form-field appearance="fill">
        <mat-label>Address</mat-label>
        <input matInput type="text" [formControl]="form.controls.address" placeholder="Enter address" />
        <mat-icon matSuffix>location_on</mat-icon>
      </mat-form-field>

      <!-- payment type -->
      <mat-radio-group class="flex items-center justify-around" [formControl]="form.controls.type">
        <mat-radio-button value="paypal">Paypal</mat-radio-button>
        <mat-radio-button value="stripe">Stripe</mat-radio-button>
        <mat-radio-button value="venmo">Venmo</mat-radio-button>
      </mat-radio-group>

      <!-- submit button -->
      <button mat-raised-button color="primary">Pay</button>
    </form>
  `,
  standalone: true,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagePaymentComponent {
  private readonly injector = inject(Injector);

  readonly form = new FormGroup({
    amount: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)],
    }),
    address: new FormControl('', [Validators.required]),
    type: new FormControl<'paypal' | 'stripe' | 'venmo'>('paypal', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    // get the payment type
    const type = this.form.controls.type.value;
    // update the payment service
    const paymentBaseService = this.updatePaymentService(type);
    // pay
    paymentBaseService.pay();
  }

  private updatePaymentService(type: 'paypal' | 'stripe' | 'venmo') {
    switch (type) {
      case 'paypal':
        return this.injector.get(PaypalService);
      case 'stripe':
        return this.injector.get(StripeService);
      case 'venmo':
        return this.injector.get(VenmoService);
      default:
        throw new Error(`Unknown payment type: ${type}`);
    }
  }
}
