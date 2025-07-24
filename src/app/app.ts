import { Component,type OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskSummaryComponent } from './components/task-summary/task-summary';
import { CommonModule } from '@angular/common';
import { TaskService } from './task';

interface Task {
  id: number
  description: string
  completed: boolean
  selectedpriority: string
  createdDate: Date
}

@Component({
  standalone:true ,
  selector: 'app-root',
  imports: [RouterOutlet,TaskSummaryComponent,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe((tasks: Task[]) => this.tasks = tasks);
  }
}
