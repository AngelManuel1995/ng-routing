import { Component } from '@angular/core';
import { ActivatedRoute }	from '@angular/router';

@Component({
	selector:'app-user',
	templateUrl:'./user.component.html'
})

export class UserComponent {
    
	constructor(private _activatedRouter:ActivatedRoute){
		this._activatedRouter.params.subscribe(params => {
			console.log(params)
		});
	}
	
}
