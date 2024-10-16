import {Component, OnInit} from '@angular/core';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  completedTodos: Todo[] = [];
  newTodo: string = '';
  editingIndex: number | null = null;

  ngOnInit() {
    this.loadTodos();
  }

  addTodo() {
    if (this.newTodo.trim()) {
      if (this.editingIndex !== null) {
        this.todos[this.editingIndex].text = this.newTodo.trim();
        this.editingIndex = null;
      } else {
        this.todos.push({ text: this.newTodo.trim(), completed: false });
      }
      this.saveTodos();
      this.newTodo = '';
    }
  }


  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  editTodo(index: number) {
    this.newTodo = this.todos[index].text;
    this.editingIndex = index;
  }

  moveTodo(index: number) {
    if (this.todos[index].completed) {
      this.completedTodos.push(this.todos[index]);
      this.todos.splice(index, 1);
      this.saveTodos();
    }
  }

  deleteCompleted(index: number) {
    this.completedTodos.splice(index, 1);
    this.saveTodos();
  }


  saveTodos() {
    const allTodos = [...this.todos, ...this.completedTodos];
    localStorage.setItem('todos', JSON.stringify(allTodos));
  }

  loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      const todosArray: Todo[] = JSON.parse(storedTodos);
      this.todos = todosArray.filter(todo => !todo.completed);
      this.completedTodos = todosArray.filter(todo => todo.completed);
    }
  }
}
