import { Component, OnInit } from '@angular/core';
import {Todo} from './../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }
  todos!: Todo[];

  ngOnInit(): void {
    this.todos=[{
      content:'First Todo',
      complete:false
    },
    {
      content:'second Todo',
      complete:false
    }
  ]
  }

}
