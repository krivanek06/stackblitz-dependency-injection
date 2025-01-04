import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route, RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@Component({
  selector: 'app-root',
  template: `<router-outlet />`,
  imports: [RouterModule],
})
export class App {}

export const appRoutes: Route[] = [
  {
    path: 'payment',
    loadComponent: () =>
      import('./payment-module/components/page-payment/page-payment.component').then((m) => m.PagePaymentComponent),
  },
];

bootstrapApplication(App, {
  providers: [provideHttpClient(), provideRouter(appRoutes), provideAnimationsAsync()],
});
