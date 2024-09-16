import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { TaskService } from '../../service/task.service';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatFormField,
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  taskTitle =  ''
  taskDescrptions = ''

  constructor(
    private taskService:TaskService,
    private snackBar: MatSnackBar
    ){}

  addTask(){
    if(this.taskTitle.trim()){
      const newTask = {
        id: uuidv4(),
        title: this.taskTitle,
        descriptions:this.taskDescrptions,
        completed:false
      };
      this.taskService.addTask(newTask);
      this.snackBar.open('Tarea Creada con Exito!','Cerrar',{
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition:'top',
      })
      this.taskTitle = '';
      this.taskDescrptions = '';
    }
  }
}
