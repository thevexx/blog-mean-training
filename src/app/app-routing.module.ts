import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
<<<<<<< HEAD
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'account', component: AccountComponent}
=======
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
>>>>>>> 99d6482bef8a3c630e6270442d0b2e4c4460405d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
