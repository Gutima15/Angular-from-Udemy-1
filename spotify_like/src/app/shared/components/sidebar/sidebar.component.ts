import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = {defaultOptions: [], accessLink: []};
  customOptions: Array<any> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Find',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Your library',
        icon: 'uil uil-chart',
        router: ['/','favorites'],
        query: { route: 'redirection' }
      }
    ] 

    this.mainMenu.accessLink = [
      {
        name: 'Create playlist',
        icon: 'uil-plus-squared'
      },
      {
        name: 'Songs you liked',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'My playlist #1',
        router: ['/']
      },
      {
        name: 'My playlist #2',
        router: ['/']
      },
      {
        name: 'My playlist #3',
        router: ['/']
      },
      {
        name: 'My playlist #4',
        router: ['/']
      },
    ]

  }

  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  }
}
