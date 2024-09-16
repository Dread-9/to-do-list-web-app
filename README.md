# To-Do List Web Application

## Descripción del Proyecto

Desarrolla una aplicación web simple para gestionar una lista de tareas (To-Do List). La aplicación debe permitir a los usuarios agregar, editar, eliminar y marcar las tareas como completadas.

## Requisitos Específicos

### Configuración del Proyecto

Crea un nuevo proyecto en Angular utilizando la CLI de Angular:
```bash
  ng new to-do-list-app
```
Angular Material para los componentes de la interfaz de usuario:
```bash
  ng add @angular/material
```
## Estructura de la Aplicación

Crea los componentes necesarios para la aplicación:

```bash
  ng generate component task-list
  ng generate component task-item
  ng generate component add-task
```
Implementar un servicio para la logica y estados de las tareas:
```bash
  ng generate service task
```
## Funcionalidades

```bash
  Agregar Tareas: Implementa un formulario para agregar nuevas tareas a la lista.

  Editar Tareas: Permite la edición de tareas existentes.

  Eliminar Tareas: Habilita la eliminación de tareas.

  Marcar como Completada: Permite a los usuarios marcar tareas como    completadas   y visualizar su estado.

  Utiliza RXJS para gestionar las suscripciones y los cambios de estado en el servicio.
```
Persistencia de Datos
```bash
  Implementa la persistencia de tareas utilizando el almacenamiento local del navegador (localStorage).
```
Pruebas Unitarias
```bash
  Escribe pruebas unitarias para al menos uno de los componentes y para el TaskService utilizando Jasmine/Karma.
  Asegúrate de cubrir al menos el 80% de los casos de uso del servicio y del componente.
```
## Instalación y Ejecución

Clona el repositorio:

```bash
  git clone https://github.com/Dread-9/to-do-list-web-app.git
  cd to-do-list-web-app
```

Instala las dependencias:

```bash
  npm install
```

Ejecuta la aplicación:

```bash
  ng serve
```
Abre tu navegador y navega a http://localhost:4200



## Pruebas Unitarias

Para ejecutar las pruebas unitarias, utiliza el siguiente comando:

```bash
  ng test
```
Generar reporte de cobertura pruebas:
```bash
  ng test --code-coverage
```


## Demo

https://todo-list-web-app-gary.netlify.app/


## Documentación 

[Angular](https://angular.dev)

[Angular material](https://material.angular.io)




## Authors

- [@Gary Monasterio Aguilera](https://github.com/Dread-9)