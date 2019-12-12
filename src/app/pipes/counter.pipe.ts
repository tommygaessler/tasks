import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter',
  pure: false
})
export class CounterPipe implements PipeTransform {

  transform(tasks: Array<object>, completed: boolean): any {
    return tasks.filter((task) => task['completed'] === completed).length;
  }

}
