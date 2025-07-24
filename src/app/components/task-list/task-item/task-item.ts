import { DatePipe } from "@angular/common"
import { Component, EventEmitter, Input, Output } from "@angular/core"
import { HighlightDirective } from "../../../directives/highlight"
import { TaskService, Task } from "../../../task" // Import Task from task service

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.html",
  styleUrls: ["./task-item.css"],
  imports: [DatePipe, HighlightDirective],
  standalone: true // Add standalone if using standalone components
})
export class TaskItemComponent {
  @Input() task!: Task;

  constructor(private taskService: TaskService) {}

  onComplete() {
    this.taskService.completeTask(this.task.id);
  }

  onRemove() {
    this.taskService.removeTask(this.task.id);
  }
}