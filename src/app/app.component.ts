import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data1: any;
  data2: any;
  yhy: any;
  p: any;
  pageSize: any;
  collection: any;
  yhym: any

  constructor(private http: HttpClient, private subj: Subject<any> = new Subject<any>()) { }

  ngOnInit() {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-01-24&sortBy=publishedAt&apiKey=e6345bada3134d478aac93ee56e6f825';

    this.http.get(url).subscribe((data: any) => {
      this.data1 = data.articles;
      this.data2 = data.totalResults;
      this.collection = this.data1;

      });

    // Размер страницы
    this.pageSize = 20;
    // Номер текущей страницы
    this.p = 1;
  }
  

   

}





