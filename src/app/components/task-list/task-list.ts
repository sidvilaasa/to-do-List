import { Component, Input, OnInit } from '@angular/core';
import { TaskService, Task } from '../../task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "./task-item/task-item";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  standalone: true,
  imports: [CommonModule, TaskItemComponent]
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[] = [];

  constructor(public taskService: TaskService) {}

  ngOnInit() {}
}