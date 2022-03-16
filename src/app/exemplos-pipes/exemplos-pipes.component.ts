import { Component, OnInit } from '@angular/core'; 
import { interval, map, Observable, timeout } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://www.amazon.com.br/Learning-JavaScript-Data-Structures-Algorithms/dp/1785285491/ref=sr_1_4?keywords=loiane+groner&qid=1647451700&sprefix=loiane%2Caps%2C243&sr=8-4&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147#detailBullets_feature_div'
  }

  livros: string[] = ['Java', 'Angular 2']

  filtro!: string;
  
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = interval(2000)
  .pipe(
    map((valor: any) => 'Valor assíncrono 2')
  );
  
  constructor() { }

  ngOnInit(): void {
  }

  addCurso(valor: string){
    this.livros.push(valor);
    console.log(this.livros)
  }

  obterCursos(){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter(
      v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase()) 
    );
  }

}
