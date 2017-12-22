import { Component } from '@angular/core';

@Component({
	selector:'app-home',
	templateUrl:'./home.component.html',
	styles:[`
		input[type="color"] {
			-webkit-appearance: none;
			border: none;
			width: 32px;
			height: 32px;
		}
		input[type="color"]::-webkit-color-swatch-wrapper {
			padding: 0;
		}
		input[type="color"]::-webkit-color-swatch {
			border: none;
		}
	`]
})

export class HomeComponent{
		
	color:string = "#1c8d44";
	constructor(){
			
	}

}