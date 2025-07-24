import { Component } from '@angular/core';
import { TaskService, Task } from '../task';
import { TaskFormComponent } from '../components/task-form/task-form';
import { TaskListComponent } from '../components/task-list/task-list';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskFormComponent, TaskListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  tasks: Task[] = [];

  constructor(public taskService: TaskService) {
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}
