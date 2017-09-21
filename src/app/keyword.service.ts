import { Http, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Keyworddetails } from './keyworddetails';


@Injectable()


export  class KeywordService{
    constructor(private http:Http){}
    private API_URL='https://api.github.com/search/repositories?q=+language:';
    private keyword:string;
    private URL:string;
    searchKeyword(keyword): Observable<Keyworddetails[]>{
        this.URL=this.API_URL+keyword+'&sort=stars&order=desc';
    return  this.http.get(this.URL)
    .map(response => response.json() as Keyworddetails[]);
}





}