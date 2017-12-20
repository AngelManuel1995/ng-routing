import { Component, OnInit } from '@angular/core';

@Component({
	selector:'app-ng-style',
	template:`
	
		<p [ngStyle]="{'font-size': tamano3 + 'px'}"> 
			Hola mundo... Esta es una etiqueta 
		</p>

		<p [style.fontSize]="'40px'"> 
			Hola mundo... Esta es una etiqueta 
		</p>

		<p [style.fontSize.px]="tamano2"> 
			Hola mundo... Esta es una etiqueta 
		</p>

		<div>
			<p [style.fontSize.px]="tamano" >Ejemplo... Hola mundo </p>
			
			<button class="btn btn-primary" (click)="tamano = tamano + 5">
				<i class="fa fa fa-plus"></i>
			</button>

			<button class="btn btn-primary" (click)="tamano = tamano - 5" >
				<i class="fa fa fa-minus"></i>
			</button>
		</div>
	`,
	styles:[]
})

export class NgStyleComponen implements OnInit{

	tamano:number = 30;
	tamano2:number = 45;
	tamano3:number = 20

	constructor(){

	}

	ngOnInit() {
	
	}

}