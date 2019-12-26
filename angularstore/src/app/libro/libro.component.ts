import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { share, finalize } from 'rxjs/operators';
@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})

export class LibroComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  
  url = `/api/courses?limit=24&offset=24&orderBy=popularity%20desc&expand=provider&customPageId=0"`;
datos=[];
encontrado=[];
mensa='';
searchText;
sum = 100;
direction = '';
array = [];
public news: Array<any> = [];

  private currentPage = 1;

  private request$: Observable<any>;

  constructor(private http: HttpClient) {
  
    this.http.get(this.url).toPromise().then(data => {
      
      
for(let key in data)
this.datos.push(data[key]);
    });

    console.log(this.datos);
    
   }

 

  ngOnInit() {
    this.getNews(this.currentPage)
    .pipe(finalize(() => this.onFinalize()))
    .subscribe((news) => {
      this.currentPage++;
      this.news = this.news.concat(news);
    });
  }
  onScrollDown () {
    console.log('scrolled down!!');
this.mensa="abajo";
this.getNews(this.currentPage)
      .pipe(finalize(() => this.onFinalize()))
      .subscribe((news) => {
        this.currentPage++;
        this.news = this.news.concat(news);
      });
   
  }
  
  onUp() {
    console.log('scrolled up!');
    this.mensa="arriba";
    this.getNews(this.currentPage)
    .pipe(finalize(() => this.onFinalize()))
    .subscribe((news) => {
      this.currentPage++;
      this.news = news.concat(this.news);
    });

  }
  private getNews(page: number = 1): Observable<any> {
    if (this.request$) {
      return this.request$;
    } else {
      this.request$ = this.http.get(`https://node-hnapi.herokuapp.com/news?page=${page}`).pipe(share());
      return this.request$;
    }
  }

  private onFinalize(): void {
    this.request$ = null;
  }
   
  }
  

