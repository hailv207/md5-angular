import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
interface ITodo {
  id: number;
  content: string;
  complete: boolean;
}

let id2 = 3;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  userInput = new FormControl();
  todos: Array<ITodo> = [
    {
      id: 2,
      content: 'work',
      complete: false
    },
    {
      id: 3,
      content: 'home',
      complete: false
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  onChange() {
    const {value} = this.userInput;
    if (value) {
      const todo: ITodo = {
        id: id2++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i) {
    this.todos[i].complete = !this.todos[i].complete;
  }

}
