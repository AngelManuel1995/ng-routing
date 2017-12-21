//Para poder crear una directiva tenemos que importat Directive from '@angular/core'
//Hacemos uso del elemento ElementRef para porder hacer uso del elemento que llega y poder usarlo como nosotros queramos.
//Hacemos uso del elemento HostListener para generación de eventos.

import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Directive({
	selector:'[appHighlighted]'
})

export class HighlightedDirective {
    
	constructor(private el:ElementRef, 
							private _appComponent:AppComponent){
		console.log("Directiva inicializada");
		//el.nativeElement.style.backgroundColor = "yellow";
	}

	@Input("appHighlighted") nuevoColor:string;

	@HostListener('mouseenter') mouseEnter(){
		this.highlight( this._appComponent.color || 'salmon');
		this.textColor('white');
	}

	@HostListener('mouseleave') mouseLeave(){
		this.highlight(null);
		this.textColor('black');
	}

	private highlight(color:string){
		this.el.nativeElement.style.backgroundColor = color;
	}
	private textColor(color:string){
		this.el.nativeElement.style.color = color;
	}

}
