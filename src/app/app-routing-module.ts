import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceChartComponent } from './components/finance-chart/finance-chart';

const routes: Routes = [
    { path: 'financeiro', component: FinanceChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
