import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { TodoInteface } from '../service/todo-inteface';
import { TodoImpServiceService } from '../service/todo-imp-service.service';
import { TodoImpServiceAbstractService } from '../service/todo-imp-service-abstract.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [
    { provide: 'TodoInteface', useClass: TodoImpServiceService },
    { provide: 'TodoInteface1', useClass: TodoImpServiceAbstractService }
  ]
})
export class AppComponent{
  data: String = "";
  constructor(@Inject('TodoInteface1') private todotnteface:TodoInteface) {
    this.data = todotnteface.getData();
  }

  name = 'Angular';
}
