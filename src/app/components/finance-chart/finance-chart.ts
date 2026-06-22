import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-chart',
  standalone: false,
  templateUrl: './finance-chart.html',
  styleUrl: './finance-chart.scss',
})
export class FinanceChartComponent implements OnInit {
  private http = inject(HttpClient);
  public dataFinance: any;

  ngOnInit() {
    this.http.get<any>('assets/finance-data.json').subscribe({
      next: (res) => {
        this.dataFinance = res;
        console.log('Dados lidos com sucesso!', this.dataFinance);
      },
      error: (error) => console.error('Erro ao ler o arquivo JSON:', error)
    });
  }
}
