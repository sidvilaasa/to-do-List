import { Component, EventEmitter, Output } from "@angular/core"

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.html",
  styleUrls: ["./task-form.css"],
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<{description: string; priority: string}>()
  onAddTask(taskInput: HTMLInputElement, priorities: HTMLSelectElement) {
    const taskValue = taskInput.value.trim();
    const priorityValue = priorities.value;

    if (taskValue==="") {
      alert("Task description is required.");
      return;
    }
    else if (!priorityValue) {
      alert("Please select a priority.");
      return;
    }
    else{
      this.addTask.emit({description:taskValue,priority:priorityValue})
      taskInput.value = "" 
      priorities.value= ""
    }
    
  }
}
