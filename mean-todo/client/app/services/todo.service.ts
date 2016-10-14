import { Injectable } 	from '@angular/core';
import { Http, Headers }			from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService{
	constructor(private _http:Http){

	}

	getTodos(){
		return this._http.get('/api/v1/todos')
			.map(res => res.json());
	}

	saveTodo(todo){
		var headers = new Headers();
		headers.append('Content-type', 'application/json');
		return this._http.post('/api/v1/todo', JSON.stringify(todo), {headers: headers})
			.map(res => res.json());
	}
}