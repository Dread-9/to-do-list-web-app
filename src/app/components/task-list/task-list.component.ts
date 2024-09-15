import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../../interface/task.module';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Observable } from 'rxjs';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    FormsModule,
    MatListModule,
    MatListItem,
    MatButtonModule,
    MatCheckbox,
    MatIconModule,
    TaskItemComponent,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks$: Observable<Task[]> = this.taskService.tasks$;

  constructor(private taskService: TaskService) {}

  toggleComplete(id: number) {
    this.taskService.toggleTaskCompletion(id);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  editTask(task: Task) {
    this.taskService.editTask(task);
  }
  

}
