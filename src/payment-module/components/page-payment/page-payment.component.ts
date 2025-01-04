import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-payment',
  imports: [],
  template: `<p>page-payment works!</p>`,
  standalone: true,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagePaymentComponent {}
