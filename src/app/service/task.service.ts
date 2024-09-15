import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../interface/task.module';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this.loadTasksFromLocalStorage());
  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  constructor() {}

  private loadTasksFromLocalStorage(): Task[] {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }

  private saveTasksToLocalStorage(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  addTask(task: Task): void {
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = [...currentTasks, task];
    this.tasksSubject.next(updatedTasks);
    this.saveTasksToLocalStorage(updatedTasks);
  }

  editTask(updatedTask: Task): void {
    const currentTasks = this.tasksSubject.value.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    );
    this.tasksSubject.next(currentTasks);
    this.saveTasksToLocalStorage(currentTasks);
  }

  deleteTask(id: number): void {
    const updatedTasks = this.tasksSubject.value.filter(task => task.id !== id);
    this.tasksSubject.next(updatedTasks);
    this.saveTasksToLocalStorage(updatedTasks);
  }

  toggleTaskCompletion(id: number): void {
    const updatedTasks = this.tasksSubject.value.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.tasksSubject.next(updatedTasks);
    this.saveTasksToLocalStorage(updatedTasks);
  }
}
