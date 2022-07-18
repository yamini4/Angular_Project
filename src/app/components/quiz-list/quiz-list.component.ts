import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import {ServiceService} from 'src/app/services/service.service';



@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizes: any[] = [];

  constructor(private serviceService:ServiceService) {}

  ngOnInit(): void {
    this.quizes = this.serviceService.getAll();
  }

}
