import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  id: number;
  description: string;
  completed: boolean;
  selectedpriority: string;
  createdDate: Date;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  get tasks(): Task[] {
    return this.tasksSubject.value;
  }

  setTasks(tasks: Task[]) {
    this.tasksSubject.next(tasks);
  }

  addTask(description: string, priority: string) {
    const newTask: Task = {
      id: this.tasks.length ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1,
      description: description,
      completed: false,
      selectedpriority: priority,
      createdDate: new Date(),
    };
    this.setTasks([...this.tasks, newTask]);
  }

  completeTask(id: number) {
    const updated = this.tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    this.setTasks(updated);
  }

  removeTask(id: number) {
    const updated = this.tasks.filter(t => t.id !== id);
    this.setTasks(updated);
  }
}
