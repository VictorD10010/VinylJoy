import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class MenuComponent implements OnInit{
  
    title= "Vinyljoy";  
    constructor() { }

    ngOnInit(): void{

    }
}
