import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
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
  ],
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements AfterViewInit{
  leftState1: 'hidden' | 'visible' = 'hidden';
  leftState2: 'hidden' | 'visible' = 'hidden';
  rightState1: 'hidden' | 'visible' = 'hidden';
  rightState2: 'hidden' | 'visible' = 'hidden';

  @ViewChild('skillsRoot', { static: true }) skillsRoot!: ElementRef;

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
          setTimeout(() => {
            this.rightState2 = 'visible';
          }, 1300);

          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(this.skillsRoot.nativeElement);
  }
}
