import { Component} from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [];

  showForm  = false;
  listEmpty =  true;

  toggleInput() {
    
    if (this.showForm == false) {
      this.showForm = true;
    } else { 
      this.showForm = false;
    }
  }

  createNewTask(name, description) { 
    this.tasks.push(new Task(name, description));
    if (this.tasks.length > 0) {
      this.listEmpty = false;
    }
  }

  removeTask(task) { 
    this.tasks.splice(this.tasks.indexOf(task), 1);
    if (this.tasks.length == 0) {
      this.listEmpty = true;
    }
  }

  sortByName() {
    this.tasks.sort((t1: Task, t2: Task) => {
      return t1.name.localeCompare(t2.name);
    });
  }

  sortByDate() {
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
