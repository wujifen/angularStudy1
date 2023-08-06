import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  teacher = {
    name: '',
    username: '',
    email: '',
    sex: true,
  };
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.teacher);
    this.httpClient.post('http://angular.api.codedemo.club:81/teacher', this.teacher)
      .subscribe((result) => {
        console.log('接受到返回数据', result);
      }, (error) => {
        console.log('请求失败');
      }, () => {
        console.log('第三个参数');
      });
  }

}
