import { Component } from '@angular/core';

interface Todos{
  high: string[]
  normal: string[]
  low: string[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular';
  todos: Todos = {
    high: [],
    normal: [],
    low: []
  };
  inputItem: string = '';
  selectedItem: string | null = null;

  get isSelectdItem(): boolean {
    return this.selectedItem !== null;
  }

  addItem(): void {
    this.todos.normal.push(this.inputItem);
    this.inputItem = '';
  }

  onClickTodo(todo): void {
    this.selectedItem = todo;
  }

  onClickPriority(signum): void {
    const keys: string[] = Object.keys(this.todos);
    for(let idx in keys){
      const key: string = keys[idx];

      if(this.todos[key].includes(this.selectedItem)){
        this.todos[key] = this.todos[key].filter((a: string) => a !== this.selectedItem);

        const destIndex: number = (signum > 0) ? Number(idx)-1 : Number(idx)+1;
        const dest: string = keys[destIndex];
        this.todos[dest].push(this.selectedItem);

        this.selectedItem = null;
        break;
      }
    }
  }
}
