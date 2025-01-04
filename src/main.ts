import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, Route, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <main class="bg-slate-500 h-screen pt-[300px] justify-center">
      <div class="flex justify-center">
        <router-outlet />
      </div>
    </main>
  `,
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
