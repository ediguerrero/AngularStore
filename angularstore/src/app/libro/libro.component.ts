import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})

export class LibroComponent implements OnInit {
   
 
encontrado=[];
mensa='';
searchText;
sum = 100;
direction = '';
array = [];
public news: Array<any> = [];

  private currentPage = 0;

  private request$: Observable<any>;

  constructor(private http: HttpClient) { }

 

  ngOnInit() {
    this.getNews(this.currentPage)
    .pipe(finalize(() => this.onFinalize()))
    .subscribe((news) => {
      this.currentPage=this.currentPage+24;
      this.news = this.news.concat(news.items);
      console.log('el init');
      console.log(this.news);
      console.log("el current="+this.currentPage);
      console.log('fin init');
    });
  }
  onScrollDown () {
    console.log('scrolled down!!');
this.mensa="abajo";

this.getNews(this.currentPage)

      .pipe(finalize(() => this.onFinalize()))
      .subscribe((news) => {
        
        console.log("nueva new abajo")
        console.log(this.news);
        this.currentPage=this.currentPage+24;
        this.news = this.news.concat(news.items);
        console.log("el current="+this.currentPage);
      });
   
  }
  
  onUp() {
    console.log('scrolled up!');
    console.log("el current="+this.currentPage);
    this.mensa="arriba";
    this.getNews(this.currentPage)
    .pipe(finalize(() => this.onFinalize()))
    .subscribe((news) => {
      console.log("nueva new arriba")
      console.log(this.news);
      this.currentPage=this.currentPage+24;
      this.news = this.news.concat(news.items);
      console.log("el current="+this.currentPage);
    });

  }
  private getNews(page: number = 0): Observable<any> {
    if (this.request$) {
      return this.request$;
    } else {
      console.log("pagina="+page);
      this.request$ = this.http.get(`/api/courses?limit=24&offset=${page}&orderBy=popularity%20desc&expand=provider&customPageId=0`).pipe(share());
    console.log(this.request$);
      return this.request$;
    }
  }

  private onFinalize(): void {
    this.request$ = null;
  }
   
  }
  

