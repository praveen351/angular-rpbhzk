import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TodoInteface } from '../service/todo-inteface';
import { TodoImpServiceService } from '../service/todo-imp-service.service';
import { TodoImpServiceAbstractService } from '../service/todo-imp-service-abstract.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
