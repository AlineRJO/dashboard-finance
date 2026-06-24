import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { financeModel } from '../../models/finance.model';
import { PoChartSerie, PoChartType } from '@po-ui/ng-components';
import { SubCategoryType } from '../../models/subCategory.type.enum';


@Component({
  selector: 'app-finance-chart',
  standalone: false,
  templateUrl: './finance-chart.html',
  styleUrl: './finance-chart.scss',
})
export class FinanceChartComponent implements OnInit {
  private http = inject(HttpClient);
  public dataFinance: financeModel[] = [];
  public chartType: PoChartType = PoChartType.Donut; 
  public financeSeries: Array<PoChartSerie> = [];
  private cdr = inject(ChangeDetectorRef); 

  // ngOnInit() {
  //   this.http.get<any>('../../../assets/finance-data.json').subscribe({
  //     next: (res) => {
  //       this.dataFinance = res;
  //       console.log('Dados lidos com sucesso!', res);
  //       this.groupFinance();
        
  //     },
  //     error: (error) => console.error('Erro ao ler o arquivo JSON:', error)
  //   });
  // }

  // groupFinance(): void {
  //   const contagemMap = this.dataFinance.reduce((acc, item) => {
  //     const categorySelected = item.subCategory;
      
  //     acc[categorySelected] = (acc[categorySelected] || 0) + 1;
      
  //     return acc;
  //   }, {} as { [key: string]: number });

  //   this.financeSeries = Object.keys(contagemMap).map(key => ({
  //     label: key,
  //     data: contagemMap[key]
  //   })); 
  //    this.cdr.detectChanges();    
  // }
  ngOnInit() {
    this.http.get<any[]>('assets/finance-data.json').subscribe({
      next: (dadosJson) => {
        // Realiza a contagem das subcategorias que criamos antes
        const contagemMap = dadosJson.reduce((acc, item) => {
          const categoria = item.subCategory;
          acc[categoria] = (acc[categoria] || 0) + 1;
          return acc;
        }, {} as { [key: string]: number });

        // Força o JavaScript a esperar um milissegundo. 
        // Isso dá tempo para o HTML processar e evita que a tela trave sem o gráfico.
        setTimeout(() => {
          this.financeSeries = Object.keys(contagemMap).map(key => ({
            label: key,
            data: contagemMap[key]
          }));

          // 3. Força o Angular a renderizar o gráfico na tela
          this.cdr.detectChanges(); 
          console.log('Gráfico renderizado com sucesso!', this.financeSeries);
        }, 100);
      },
      error: (error) => console.error('Erro ao carregar o JSON:', error)
    });
  }
}
