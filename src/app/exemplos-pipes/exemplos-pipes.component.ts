import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
  }

  addCurso(valor: string){
    this.livros.push(valor);
    console.log(this.livros)
  }

}
