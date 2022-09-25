import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'dandref';
  dtOptions: DataTables.Settings = {};
  posts:any[];
  
  constructor(private http: HttpClient) { }
   
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
   
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(posts:any[] => {
        this.posts = posts;
    });
   
  }  
}
