import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppModel } from './app.model';

@Injectable({
    providedIn: 'root'
})
export class Planet {

    apuURL = 'https://assignment-machstatz.herokuapp.com/planet';

    constructor(private _http: HttpClient){ }

    getUsers(){
        

        return  this._http.get<AppModel[]>(this.apuURL);

    }
}