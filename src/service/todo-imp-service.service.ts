import { Injectable } from '@angular/core';
import { TodoInteface } from './todo-inteface';

@Injectable()
export class TodoImpServiceService implements TodoInteface{
  
  constructor() { }

  getData(){
    return ('Hello Implements');
  }
  
}