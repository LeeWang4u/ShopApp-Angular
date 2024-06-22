//import { Component } from '@angular/core';

import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from "@angular/common";
//import { initFlowbite } from "flowbite";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  title = 'frontend-comments';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // Safe to use document here
      const doc = document;
      console.log('Document is available');
      // initFlowbite(); // Uncomment if flowbite is needed
    } else {
      console.log('Document is not available');
    }
  
    // if (isPlatformBrowser(this.platformId)) {
    // //  initFlowbite();
    // }
  }
}
