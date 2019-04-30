import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
import { ArticleComponent } from './article/article.component';
>>>>>>> d8017c4c4517eba2109fc8d7867f4bbcffc64c3a

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
<<<<<<< HEAD
    HomeComponent
=======
    ArticleComponent
>>>>>>> d8017c4c4517eba2109fc8d7867f4bbcffc64c3a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RegisterComponent, ArticleComponent]
})
export class AppModule { }
