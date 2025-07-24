import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../task';
import { TaskListComponent } from '../components/task-list/task-list';

@Component({
  selector: 'app-pending',
  imports: [TaskListComponent],
  templateUrl: './pending.html',
  styleUrl: './pending.css'
})
export class Pending implements OnInit{
pending: Task[] = [];
  
    constructor(public taskService: TaskService) {}
  
    ngOnInit(): void {
    this.taskService.tasks$.subscribe((tasks: Task[]) => {
      this.pending = tasks.filter(task => !task.completed);
    });
  }
}
