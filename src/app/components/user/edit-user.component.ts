import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector:'app-edit-user',
	template:`
		<p>User edit works!!</p>
	`
})

export class EditUserComponent {
    
	constructor(private _activatedRoute:ActivatedRoute){
		this._activatedRoute.parent.params.subscribe(params => {
			console.log(params);
		});
	}
	
}
