import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }         from '@angular/forms';

import { AppComponent } from './app.component';
import { NgStyleComponen } from './components/ng-style/ng-style.component';
import { CssComponent }    from './components/css/css.component';
import { ClassesComponent } from './components/classes/classes.component';
import { HighlightedDirective }   from './directives/highlighted.directive';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponen,
    CssComponent,
    ClassesComponent,
    HighlightedDirective    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
