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
encontrado=[];
mensa='';

  constructor(private http: HttpClient) {
   
    this.http.get(this.url).toPromise().then(data => {
      
      console.log(data.items);     
for(let key in data.items)
this.datos.push(data.items[key]);
    });

    

   }

 

  ngOnInit() {
    
  }
  onSubmit(name: String) {
    for(let key in this.datos){
if(datos[key]==name){
  console.log(datos[key]);
this.encontrado.push(this.datos[key]);}}

    
  }
    
    
   
  }
  

