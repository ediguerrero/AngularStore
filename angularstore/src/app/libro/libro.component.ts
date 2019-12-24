import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Key } from 'protractor';
import { OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})

export class LibroComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  
  url = `/api/courses?orderBy=popularity+desc&expand=provider&limit=24&profession=&subjectAreaCode=&state=&provider=&name=`;
datos=[];
mensa='';
onSubmit(playerName: string) {
  console.log(playerName)
  this.mensa=playerName;
}

clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  constructor(private http: HttpClient) {
   
    this.http.get(this.url).toPromise().then(data => {
      
      console.log(data.items);     
for(let key in data.items)
this.datos.push(data.items[key]);
    });

    

   }

 

  ngOnInit() {
    
  }

  
}
