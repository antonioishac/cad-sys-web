import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'go-top-button',
  templateUrl: './go-top-button.component.html',
  styleUrls: ['./go-top-button.component.scss']
})
export class GoTopButtonComponent implements OnInit {
  scrollState: any;

  @Input() scrollDistance = 100;

  ngOnInit() {
  }

  /**
   * Listens to window scroll
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
      if (this.isBrowser()) {
          this.scrollState = this.getCurrentScrollTop() > this.scrollDistance ? 'in' : 'out';
      }
  }

  scrollTop(event: any) {
      if (!this.isBrowser()) {
          return;
      }
      event.preventDefault();
      window.scrollTo(0, 0);
  }

  getCurrentScrollTop() {
      if (typeof window.scrollY !== 'undefined') {
          return window.scrollY;
      }

      if (typeof window.pageYOffset !== 'undefined') {
          return window.pageYOffset;
      }

      if (typeof document.body.scrollTop !== 'undefined') {
          return document.body.scrollTop;
      }

      if (typeof document.documentElement.scrollTop !== 'undefined') {
          return document.documentElement.scrollTop;
      }

      return 0;
  }

  isBrowser(): boolean {
      return typeof (window) !== 'undefined';
  }
}
