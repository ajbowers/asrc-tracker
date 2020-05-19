import { Component} from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [];

  createNewTask(name, description) { 
    this.tasks.push(new Task(name, description));
  }

  removeTask(task) { 
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  sortByName() {
    console.log("FN ::: Sort by Name")
    console.log(this.tasks)
    this.tasks.sort((t1: Task, t2: Task) => {
      return t1.name.localeCompare(t2.name);
    });
  }

  sortByDate() {
    console.log("FN ::: Sort by Date")
    console.log(this.tasks)
    this.tasks.sort((t1: Task, t2: Task) => {
      if (t1.dateCreated < t2.dateCreated ) {
        return -1;
      } else if (t1.dateCreated > t2.dateCreated) {
        return 0;
      } else {
        return 1;
      }
    });
  }
}
