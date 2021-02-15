import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.interface';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: Project | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
