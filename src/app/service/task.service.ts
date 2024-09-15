import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../interface/task.module';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskSubject:BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this.loadTaskStorage());
  tasks$:Observable<Task[]> = this.taskSubject.asObservable();

  constructor() { }

  loadTaskStorage():Task[] {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks):[]
  }

  saveTaskStorage(tasks:Task[]):void{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTask(){

  }

  addTask(task:Task):void{

  }

  editTask(){

  }

  deleteTask(){

  }



}
