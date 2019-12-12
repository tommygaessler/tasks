import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms'
import { StateService } from './services/state.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  taskForm: FormGroup
  tasks: Array<object> = []

  constructor(formBuilder: FormBuilder, public stateService: StateService) {
    this.tasks = stateService.getTasks()
    this.taskForm = formBuilder.group({
      name: '',
      completed: false
    })
  }

  addTask() {
    console.log('hello')
    console.log(this.taskForm.value)
    this.tasks.push(this.taskForm.value)
    console.log(this.tasks)
    this.taskForm['controls'].name.reset('')
    this.stateService.setTasks(this.tasks)
  }

  updateTasks() {
    this.stateService.setTasks(this.tasks)
  }
}
