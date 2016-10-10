import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent { 
	private jbtHeading: string = "Howdy";
	private jbtText: string="This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.";
	private jbtBtnText: string="Read More";
	private jbtBtnUrl: string="/about";

	contructor(){
		console.log("this never happens")
	}
}
