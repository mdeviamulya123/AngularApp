import { Component,OnInit } from '@angular/core';
import { KeywordService} from './keyword.service';

import { Keyworddetails } from './keyworddetails';


@Component({
    selector:'app-keyword',
    templateUrl:'./keyword.component.html'
})

export class KeywordComponent implements OnInit{
    private keyword:string;
    searches :any;
constructor(private _keywordservice :KeywordService){}
    keyword_data: any;

   public keyworddetail: Keyworddetails[];

searchKeyword(keyword:string){
        return this._keywordservice.searchKeyword(keyword).subscribe(
            keyword_data=> {this.keyword_data = keyword_data; console.log(keyword_data)}
        )
    }


    ngOnInit(){
       
    }
    }