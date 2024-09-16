import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Task } from '../interface/task.module';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a task', () => {
    const task: Task = {
      id: '1', 
      title: 'Tarea de Prueba',
      completed: false,
      descriptions: ''
    };
    service.addTask(task);
    service.tasks$.subscribe(tasks => {
      expect(tasks.length).toBe(1);
      expect(tasks[0]).toEqual(task);
    });
  });

  // Verifica que se puedan editar tareas
  it('should edit a task', () => {
    const task: Task = {
      id: '1', 
      title: 'Tarea de Prueba',
      completed: false,
      descriptions: ''
    };
    service.addTask(task);
    
    const updatedTask: Task = {
      id: '1', 
      title: 'Actualizacion de Tarea',
      completed: true,
      descriptions: ''
    };
    service.editTask(updatedTask);
    
    service.tasks$.subscribe(tasks => {
      expect(tasks.length).toBe(1);
      expect(tasks[0]).toEqual(updatedTask);
    });
  });

  // Verifica que se puedan eliminar tareas
  it('should delete a task', () => {
    const task1: Task = {
      id: '1', 
      title: 'Tarea de Prueba 1',
      completed: false,
      descriptions: ''
    };
    const task2: Task = {
      id: '2', 
      title: 'Tarea de Prueba 2',
      completed: false,
      descriptions: ''
    };
    service.addTask(task1);
    service.addTask(task2);

    service.deleteTask('1');

    service.tasks$.subscribe(tasks => {
      expect(tasks.length).toBe(1);
      expect(tasks[0]).toEqual(task2);
    });
  });

  it('should toggle task completion', () => {
    const task: Task = {
      id: '1', 
      title: 'Tarea de Prueba',
      completed: false,
      descriptions: ''
    };
    service.addTask(task);
    
    service.toggleTaskCompletion('1');

    service.tasks$.subscribe(tasks => {
      expect(tasks.length).toBe(1);
      expect(tasks[0].completed).toBe(true);
    });
  });
});
