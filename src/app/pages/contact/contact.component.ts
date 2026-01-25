import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
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
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  leftState: 'hidden' | 'visible' = 'hidden';
  rightState: 'hidden' | 'visible' = 'hidden';

  @ViewChild('contactRoot', { static: true }) contactRoot!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.leftState = 'visible';
          setTimeout(() => {
            this.rightState = 'visible';
          }, 500);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(this.contactRoot.nativeElement);
  }
}
