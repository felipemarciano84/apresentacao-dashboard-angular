import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public id: number = 0;
  public NomeCurso : string = 'Angular com ASP.NET Core';

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(event: any): void{
    console.log(event);
  }

  selectName(id: number): void{
    console.log('Id do parâmetro: ', id);
    console.log('Id da propriedade: ', this.id);
  }
}
