import { Component, OnInit } from '@angular/core';
import {JavaService} from './java.service';
import {run} from 'tslint/lib/runner';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
  /*data = [
    {
      id:1,
      name:'Spring MVC',
      CourseDetail:'The Spring Web MVC framework provides Model-View-Controller (MVC) architecture and ready components that can be used to develop flexible and loosely coupled web applications. The MVC pattern results in separating the different aspects of the application (input logic, business logic, and UI logic), while providing a loose coupling between these elements.'
    },
    {
      id:2,
      name:'Spring Boot',
      CourseDetail:'Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can run. We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need very little Spring configuration.'
    },
    {
      id:3,
      name:'Spring Security',
      CourseDetail:'Spring Security is a framework that focuses on providing both authentication and authorization to Java applications. Like all Spring projects, the real power of Spring Security is found in how easily it can be extended to meet custom requirements'
    },
    {
      id:4,
      name:'Hibernate',
      CourseDetail:'Hibernate ORM enables developers to more easily write applications whose data outlives the application process. As an Object/Relational Mapping (ORM) framework, Hibernate is concerned with data persistence as it applies to relational databases (via JDBC).'
    },
    {
      id:5,
      name:'Angular 4',
      CourseDetail:'Angular 4 is a JavaScript framework for building web applications and apps in JavaScript, html, and TypeScript, which is a superset of JavaScript. Angular provides built-in features for animation, http service, and materials which in turn has features such as auto-complete, navigation, toolbar, menus, etc. The code is written in TypeScript, which compiles to JavaScript and displays the same in the browser.'
    }
  ];*/

  constructor(private java:JavaService) { }

  ngOnInit() {
  }

  /*saveCourse() {
    this.java.storeCourse(this.data).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
    }
    );
  }*/
}
