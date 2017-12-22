import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }         from '@angular/forms';

import { AppComponent }            from './app.component';
import { NgStyleComponen }         from './components/ng-style/ng-style.component';
import { CssComponent }            from './components/css/css.component';
import { ClassesComponent }        from './components/classes/classes.component';
import { HighlightedDirective }    from './directives/highlighted.directive';
import { NgswitchComponent }       from './components/ng-swith/ng-switch.component';
import { HomeComponent }           from './components/home/home.component';
import { DetailUserComponent }     from './components/user/detail-user.component';
import { EditUserComponent }       from './components/user/edit-user.component';
import { NewUserComponent }        from './components/user/new-user.component';
import { UserComponent }           from './components/user/user.component';
import { NavbarComponent }         from './components/navbar/navbar.component'
import { APP_ROUTING }             from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponen,
    CssComponent,
    ClassesComponent,
    HighlightedDirective,
    NgswitchComponent,
    HomeComponent,
    DetailUserComponent,
    EditUserComponent,
    NewUserComponent,
    UserComponent,
    NavbarComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
