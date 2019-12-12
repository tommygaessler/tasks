import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  getTasks() {
    if(localStorage.getItem('tasks')) {
      return JSON.parse(localStorage.getItem('tasks'))
    } else {
      return []
    }
  }
}
