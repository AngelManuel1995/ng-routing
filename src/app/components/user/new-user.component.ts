import { Component } from '@angular/core';
import { ActivatedRoute }	from '@angular/router';


@Component({
	selector:'app-new-user',
	template:`
		<p>User new works!!</p>
	`
})

export class NewUserComponent {
    
	constructor(private _activatedRoute:ActivatedRoute){
		this._activatedRoute.parent.params.subscribe(params => {
			console.log(params);
		});
	}
	
}
