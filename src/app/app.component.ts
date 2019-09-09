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
  isSelectdItem: boolean = Math.random() > 0.5;
  todos: Todos = {
    high: ['掃除', '洗濯', '炊事'],
    normal: ['買い物', '草刈り', 'アイロン'],
    low: ['窓拭き', '振り込み', '家計簿管理']
  };
  inputItem: string = '';
}
