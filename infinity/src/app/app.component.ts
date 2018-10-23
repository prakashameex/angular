import { Component, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  array = [];
  sum = 100;
  throttle = 50;
  scrollDistance = 1;
  scrollUpDistance = 1;
  direction = '';
  modalOpen = false;



  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {

  }
  // trigger lazy loading once we reach end of the page
  // need to set 80% height

  @HostListener("window:scroll", [])
  onWindowScroll() {

    var scrollHeight = jQuery(document).height();
    var scrollPosition = jQuery(window).height() + jQuery(window).scrollTop();
    if((scrollHeight - scrollPosition) / scrollHeight === 0 && (this.document.location.pathname == '/'))  {
      this.router.navigate(['/lazy1/load-parent']);
      console.log('parent call',this.document.location.pathname)
    }
    else if ((scrollHeight - scrollPosition) / scrollHeight === 0 && (this.document.location.pathname == '/lazy1/load-parent')) {
      console.log('child call',this.document.location.pathname)
      this.router.navigate(['/lazy1/load-child']);     
    }
    
  }
  // trigger lazy loading once we reach end of the page
}
