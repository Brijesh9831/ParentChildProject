import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParentPageComponent } from './parent-page/parent-page.component';
import { ChildpageComponent } from './childpage/childpage.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentPageComponent,
    ChildpageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
