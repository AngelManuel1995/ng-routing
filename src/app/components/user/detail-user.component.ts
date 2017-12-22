import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector:'app-detail-user',
	template:`
		<p>User detail works!!</p>
	`
})

export class DetailUserComponent {
    
	constructor(private _activatedRoute:ActivatedRoute){
		this._activatedRoute.parent.params.subscribe(params => {
			console.log(params);
		});
	}
	
}

