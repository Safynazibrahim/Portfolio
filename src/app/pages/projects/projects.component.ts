import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  animations: [
    trigger('fromBottom', [
      state('hidden', style({ opacity: 0, transform: 'translateY(40px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('900ms ease-out')),
    ]),
  ],
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('projectsRoot', { static: true }) projectsRoot!: ElementRef;
  bottomState: 'hidden' | 'visible' = 'hidden';
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.bottomState = 'visible';

          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(this.projectsRoot.nativeElement);
  }

  projects = [
    // ===== TESTING PROJECTS =====
    {
      title: 'EventHub - QA Testing',
      type: 'qa',
      category: 'testing',
      description:
        'Worked as part of a 2-person QA team testing EventHub, an event-planning platform with Customer, Vendor, and Admin roles. I owned testing for Registration and Vendor flows, including Forgot Password, Vendor Dashboard, and Mobile Registration, while my teammate covered Login and Booking flows. Checked data behind the UI, not just what appeared on screen.',
      image: 'assets/eventhub.png',
      tech: [
        'Manual Testing',
        'Test Case Design',
        'Bug Reporting',
        'API Validation',
        'Team Collaboration',
      ],
      github: 'https://github.com/Company-Training-Team2/project-qa-testing', // resolve from https://lnkd.in/evbBtydH
      demo: 'https://project-web-frontend-two.vercel.app/', // resolve from https://lnkd.in/ezNW9SXW
    },
    {
      title: 'Fresh Cart - QA Testing',
      type: 'qa',
      category: 'testing',
      description:
        'Designed and executed 101 manual test cases across 4 modules (Login, Register, User Flow, Checkout) on a real e-commerce site. Found and reported 17 bugs using Jira, applied Boundary Value Analysis and Equivalence Partitioning, and suggested 4 UX improvements.',
      image: 'assets/FreshCart.png',
      tech: ['Manual Testing', 'Test Case Design', 'Bug Reporting', 'Jira'],
      github: 'https://github.com/Safynazibrahim/fresh', // resolve from https://lnkd.in/d2xe6-bx (or your own QA repo if separate from the Angular one)
      demo: 'https://safynazibrahim.github.io/fresh/home',
    },
    {
      title: 'API Testing (Postman)',
      type: 'qa',
      category: 'testing',
      description:
        'Tested REST APIs using Postman, covering GET, POST, and DELETE requests. Validated status codes and response bodies, and covered positive, negative, and error-handling scenarios using organized collections and environments.',
      image: 'assets/api-testing.png',
      tech: ['API Testing', 'Postman', 'REST APIs'],
      github: 'https://github.com/Safynazibrahim/freshcart-api-testing',
      demo: null,
      collection: 'https://documenter.getpostman.com/view/29963992/2sBYAysoPK',
    },

    // ===== FRONTEND PROJECTS =====
    {
      title: 'Fresh Cart',
      type: 'angular',
      category: 'frontend',
      description: 'E-commerce web application built with Angular.',
      image: 'assets/FreshCart.png',
      tech: ['Angular 16', 'Bootstrap', 'TypeScript', 'REST API', 'Stripe'],
      github: 'https://github.com/Safynazibrahim/fresh', // resolve from https://lnkd.in/d2xe6-bx
      demo: 'https://safynazibrahim.github.io/fresh/home', // resolve from https://lnkd.in/drWAE-5t
    },
    {
      title: 'Angular Simple Website',
      type: 'angular',
      category: 'frontend',
      description: 'Simple Angular website using routing and components.',
      image: 'assets/angular-simple-website.png',
      tech: ['Angular', 'Bootstrap', 'Routing'],
      github: 'https://github.com/Safynazibrahim/Ass1', // resolve from https://lnkd.in/d5GSbd4S
      demo: 'https://safynazibrahim.github.io/Ass1/home', // resolve from https://lnkd.in/dxtK2EzK
    },
    {
      title: 'BookMarker',
      type: 'js',
      category: 'frontend',
      description: 'CRUD bookmarks app using Local Storage.',
      image: 'assets/bookMark.png',
      tech: ['JavaScript', 'Bootstrap', 'Local Storage'],
      github: 'https://github.com/Safynazibrahim/BookmarkCRUD', // resolve from https://lnkd.in/dm9svFKk
      demo: 'https://safynazibrahim.github.io/BookmarkCRUD/', // resolve from https://lnkd.in/dAMkt5cu
    },
    {
      title: 'Tailwind Simple Website',
      type: 'ui',
      category: 'frontend',
      description: 'Responsive website built using Tailwind CSS.',
      image: 'assets/tailwind-css.png',
      tech: ['HTML', 'Tailwind CSS'],
      github: 'https://github.com/Safynazibrahim/TailwindCSS', // resolve from https://lnkd.in/gSGzKaaP
      demo: null,
    },
    {
      title: 'DevFolio',
      type: 'ui',
      category: 'frontend',
      description: 'Responsive portfolio website.',
      image: 'assets/devfolio.png',
      tech: ['HTML', 'CSS', 'Bootstrap'],
      github: 'https://github.com/Safynazibrahim/DevFolio', // resolve from https://lnkd.in/dD4i3j6A
      demo: 'https://safynazibrahim.github.io/DevFolio/', // resolve from https://lnkd.in/dwf_KcuV
    },
    {
      title: 'Daniels',
      type: 'ui',
      category: 'frontend',
      description: 'Responsive landing page.',
      image: 'assets/daniels.png',
      tech: ['HTML', 'CSS', 'Bootstrap'],
      github: 'https://github.com/Safynazibrahim/Daniels', // resolve from https://lnkd.in/dmWp3Us9
      demo: 'https://safynazibrahim.github.io/Daniels/', // resolve from https://lnkd.in/dJKrD2SD
    },
    {
      title: 'Mealfy',
      type: 'ui',
      category: 'frontend',
      description: 'Responsive website using HTML & CSS.',
      image: 'assets/mealfy.png',
      tech: ['HTML', 'CSS'],
      github: 'https://github.com/Safynazibrahim/Ass5/tree/main', // resolve from https://lnkd.in/d4v6dBc6
      demo: 'https://safynazibrahim.github.io/Ass5/', // resolve from https://lnkd.in/dJPeybwg
    },
    {
      title: 'Fokir',
      type: 'ui',
      category: 'frontend',
      description: 'Responsive personal website.',
      image: 'assets/fokir.png',
      tech: ['HTML', 'CSS'],
      github: 'https://github.com/Safynazibrahim/Ass4/tree/master', // resolve from https://lnkd.in/dCNYGnPY
      demo: 'https://safynazibrahim.github.io/Ass4/', // resolve from https://lnkd.in/dacack8k
    },
  ];

  filters = [
    { label: 'Testing Projects', value: 'testing' },
    { label: 'Frontend Projects', value: 'frontend' },
  ];

  filterDescriptions: Record<string, string> = {
    testing:
      'Manual and API testing projects — real bug hunting, test case design, and QA teamwork.',
    frontend:
      'Angular and JavaScript projects built during my time as a Frontend Developer.',
  };

  activeFilter: string = 'testing';
  visibleCount = 3;
  showAll = false;

  setActiveFilter(filter: { label: string; value: string }) {
    this.activeFilter = filter.value;
  }

  get visibleProjects() {
    return this.showAll
      ? this.filteredProjects
      : this.filteredProjects.slice(0, this.visibleCount);
  }

  get filteredProjects() {
    return this.projects.filter((p) => p.category === this.activeFilter);
  }
}
