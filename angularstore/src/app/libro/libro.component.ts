import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Key } from 'protractor';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})

export class LibroComponent implements OnInit {
  
  
  url = `/api/courses?orderBy=popularity+desc&expand=provider&limit=24&profession=&subjectAreaCode=&state=&provider=&name=`;
items=[];
  
  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
    
      this.items.push(data);

    
    });
   }

 

  ngOnInit() {
   
  }

}
