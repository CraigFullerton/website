import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.interface';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project!: Project;

  constructor() { }

  ngOnInit(): void {
  }

}
