import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { FinanceChartComponent } from './components/finance-chart/finance-chart';
import { PoChartModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [App, FinanceChartComponent],
  imports: [BrowserModule, AppRoutingModule, PoModule, PoChartModule, RouterModule.forRoot([])],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [App],
})
export class AppModule {}
