import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from '../components/task-list/task-list';
import { CommonModule } from '@angular/common';
import { Task, TaskService } from '../task';


@Component({
  selector: 'app-completed',
  imports: [TaskListComponent,CommonModule],
  templateUrl: './completed.html',
  styleUrl: './completed.css'
})
export class Completed implements OnInit{
  complete: Task[] = [];
  
    constructor(public taskService: TaskService) {}
  
    ngOnInit(): void {
    this.taskService.tasks$.subscribe((tasks: Task[]) => {
      this.complete = tasks.filter(task => task.completed);
    });
  }
}
