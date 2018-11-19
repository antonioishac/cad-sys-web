import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'farol-flutuante',
  templateUrl: './farol-flutuante.component.html',
  styleUrls: ['./farol-flutuante.component.scss']
})
export class FarolFlutuanteComponent implements OnInit {

  scrollState: any;

 @Input() scrollDistance = 80;

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

    isBrowser(): boolean {
        return typeof (window) !== 'undefined';
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
}
