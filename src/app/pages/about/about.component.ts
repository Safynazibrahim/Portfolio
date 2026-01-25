import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  animations: [
    trigger('fromLeft', [
      state('hidden', style({ opacity: 0, transform: 'translateX(-40px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('900ms ease-out')),
    ]),

    trigger('fromRight', [
      state('hidden', style({ opacity: 0, transform: 'translateX(40px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('900ms ease-out')),
    ]),

    trigger('fromBottom', [
      state('hidden', style({ opacity: 0, transform: 'translateY(40px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('900ms ease-out')),
    ]),
  ],
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  leftState: 'hidden' | 'visible' = 'hidden';
  rightState: 'hidden' | 'visible' = 'hidden';
  bottomState: 'hidden' | 'visible' = 'hidden';

  @ViewChild('aboutRoot', { static: true }) aboutRoot!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.leftState = 'visible';
          setTimeout(() => {
            this.rightState = 'visible';
          }, 1200);
          setTimeout(() => {
            this.bottomState = 'visible';
          }, 700);

          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(this.aboutRoot.nativeElement);
  }
}
