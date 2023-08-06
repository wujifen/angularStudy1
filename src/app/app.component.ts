import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import {constructor} from 'jasmine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
// 初始化教师数组
  teachers = [] as any[];


  constructor(private httpClient: HttpClient) {
    console.log(httpClient);
  }

  ngOnInit(): void {
    this.httpClient.get<[]>('http://angular.api.codedemo.club:81/teacher')
      .subscribe(teachers => this.teachers = teachers);
  }

}
