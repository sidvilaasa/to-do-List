import { Component, Input } from "@angular/core"
import { RouterLink, RouterModule } from "@angular/router"

interface Task {
  id: number
  description: string
  completed: boolean
  createdDate: Date
}

@Component({
  selector: "app-task-summary",
  templateUrl: "./task-summary.html",
  imports:[RouterLink,RouterModule],
  styleUrls: ["./task-summary.css"],
})
export class TaskSummaryComponent {
  @Input() tasks: Task[] = []

  get totalTasks(): number {
    return this.tasks.length
  }

  get completedTasks(): number {
    return this.tasks.filter((task) => task.completed).length
  }

  get pendingTasks(): number {
    return this.totalTasks - this.completedTasks
  }
}
