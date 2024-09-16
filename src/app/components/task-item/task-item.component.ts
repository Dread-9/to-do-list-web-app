import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Task } from '../../interface/task.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    MatListItem,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() toggleComplete = new EventEmitter<string>();
  @Output() deleteTask = new EventEmitter<string>();
  @Output() editTask = new EventEmitter<Task>();

  isEditing = false;
  taskTitle = '';
  taskDescription = '';

  constructor(private snackBar: MatSnackBar){

  }

  ngOnInit() {
    this.taskTitle = this.task.title;
    this.taskDescription = this.task.descriptions;
  }

  onToggleComplete() {
    this.toggleComplete.emit(this.task.id);
  }

  onDeleteTask() {
    this.deleteTask.emit(this.task.id);
    this.snackBar.open('Tarea Eliminada!','Cerrar',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition:'top',
    })
  }

  onEditTask() {
    this.isEditing = true;
  }

  onSaveEdit() {
    if (this.taskTitle.trim() && this.taskDescription.trim()) {
      this.editTask.emit({ ...this.task, title: this.taskTitle, descriptions: this.taskDescription });
      this.isEditing = false;
      this.snackBar.open('Tarea actualizada!','Cerrar',{
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition:'top',
      })
    }
  }
}
