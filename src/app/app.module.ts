import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactAboutComponent } from './contact-about/contact-about.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes=[
  {path:'quiz/:quizName',component:QuizComponent},
  { path: 'quiz', component: QuizListComponent },
  {path:'contact-details',component:ContactAboutComponent},
  {path:'about',component:AboutUsComponent},
  { path: '', redirectTo: '/quiz', pathMatch: 'full' },
  { path: '**', redirectTo: '/quiz', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizListComponent,
    ContactAboutComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
