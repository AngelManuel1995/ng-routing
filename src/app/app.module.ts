import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponen } from './components/ng-style.component';
import { CssComponent }    from './components/css.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponen,
    CssComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
