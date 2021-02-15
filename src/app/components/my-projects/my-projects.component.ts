import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  #jsonUrl = 'assets/projects.json';

  projects: any;

  constructor(
    private http: HttpClient
  ) {
    this.getJSON().subscribe(resp => this.projects = resp);
   }

   public getJSON(): Observable<any> {
     return this.http.get(this.#jsonUrl);

   }

  ngOnInit(): void {

  }

}
