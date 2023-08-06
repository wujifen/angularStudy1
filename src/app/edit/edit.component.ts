import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params.id;
    console.log(this.activeRoute);
    console.log('获取到参数ID值为', id);
  }

}
