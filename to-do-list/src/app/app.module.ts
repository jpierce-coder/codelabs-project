import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoDetailComponent } from './todos/todo-detail/todo-detail.component';
import { TodoItemComponent } from './todos/todo-list/todo-item/todo-item.component';
import { RandomActivityComponent } from './random-activity/random-activity.component';
import { ActivityAddComponent } from './random-activity/activity-add/activity-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoItemComponent,
    RandomActivityComponent,
    ActivityAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
