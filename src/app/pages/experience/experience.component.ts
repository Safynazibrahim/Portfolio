import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
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
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  leftState1: 'hidden' | 'visible' = 'hidden';
  rightState1: 'hidden' | 'visible' = 'hidden';
  leftState2: 'hidden' | 'visible' = 'hidden';

  @ViewChild('experienceRoot', { static: true }) experienceRoot!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.leftState1 = 'visible';
          setTimeout(() => {
            this.rightState1 = 'visible';
          }, 500);
          setTimeout(() => {
            this.leftState2 = 'visible';
          }, 900);

          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(this.experienceRoot.nativeElement);
  }
}
