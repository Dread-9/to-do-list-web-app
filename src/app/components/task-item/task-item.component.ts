import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export class TaskItemComponent {

  @Input() task!: Task;
  @Output() toggleComplete = new EventEmitter<number>();
  @Output() deleteTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter<Task>();

  isEditing = false;
  taskTitle: string = '';
  taskDescription: string = '';

  constructor(){

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
  }

  onEditTask() {
    this.isEditing = true;
  }

  onSaveEdit() {
    if (this.taskTitle.trim() && this.taskDescription.trim()) {
      this.editTask.emit({ ...this.task, title: this.taskTitle, descriptions: this.taskDescription });
      this.isEditing = false;
    }
  }

}
