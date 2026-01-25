import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  animations: [
    trigger('textEnter', [
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateX(-40px)',
        }),
      ),
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        }),
      ),
      transition('hidden => visible', [animate('600ms ease-out')]),
    ]),

    trigger('imageEnterDesktop', [
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateX(40px)',
        }),
      ),
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        }),
      ),
      transition('hidden => visible', [animate('600ms ease-out')]),
    ]),

    trigger('imageEnterMobile', [
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateY(40px)',
        }),
      ),
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        }),
      ),
      transition('hidden => visible', [animate('600ms ease-out')]),
    ]),
  ],
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private breakpointObserver: BreakpointObserver) {}
  fullText = 'Frontend Developer';
  displayedText = '';
  private index = 0;
  private typingInterval: any;
  private deleting = false;
  isMobile = false;
  private breakpointSub: any;

  ngOnInit(): void {
    this.breakpointSub = this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
        console.log('isMobile', this.isMobile);
      });
    console.log('isMobile', this.isMobile);
    this.startTypingLoop();
  }

  animationState: 'hidden' | 'visible' = 'hidden';
  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      this.animationState = 'visible';
    });
  }

  startTypingLoop() {
    this.typingInterval = setInterval(
      () => {
        if (!this.deleting) {
          // typing
          this.displayedText = this.fullText.slice(0, this.index + 1);
          this.index++;

          if (this.index === this.fullText.length) {
            // wait 1 minute before deleting
            setTimeout(() => (this.deleting = true), 60000);
          }
        } else {
          // deleting
          this.displayedText = this.fullText.slice(0, this.index - 1);
          this.index--;

          if (this.index === 0) {
            this.deleting = false;
          }
        }
      },
      this.deleting ? 80 : 120,
    );
  }

  ngOnDestroy(): void {
    this.breakpointSub?.unsubscribe();
    clearInterval(this.typingInterval);
  }
}
