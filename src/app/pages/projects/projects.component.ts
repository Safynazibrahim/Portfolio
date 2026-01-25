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
    {
      title: 'Fresh Cart',
      type: 'angular',
      description: 'E-commerce web application built with Angular.',
      image: 'assets/FreshCart.png',
      tech: ['Angular 16', 'Bootstrap', 'TypeScript', 'REST API', 'Stripe'],
      github: 'https://lnkd.in/d2xe6-bx',
      demo: 'https://lnkd.in/drWAE-5t',
    },
    {
      title: 'Angular Simple Website',
      type: 'angular',
      description: 'Simple Angular website using routing and components.',
      image: 'assets/angular-simple-website.png',
      tech: ['Angular', 'Bootstrap', 'Routing'],
      github: 'https://lnkd.in/d5GSbd4S',
      demo: 'https://lnkd.in/dxtK2EzK',
    },
    {
      title: 'BookMarker',
      type: 'js',
      description: 'CRUD bookmarks app using Local Storage.',
      image: 'assets/bookMark.png',
      tech: ['JavaScript', 'Bootstrap', 'Local Storage'],
      github: 'https://lnkd.in/dm9svFKk',
      demo: 'https://lnkd.in/dAMkt5cu',
    },
    {
      title: 'Tailwind Simple Website',
      type: 'ui',
      description: 'Responsive website built using Tailwind CSS.',
      image: 'assets/tailwind-css.png',
      tech: ['HTML', 'Tailwind CSS'],
      github: 'https://lnkd.in/gSGzKaaP',
      demo: null,
    },
    {
      title: 'DevFolio',
      type: 'ui',
      description: 'Responsive portfolio website.',
      image: 'assets/devfolio.png',
      tech: ['HTML', 'CSS', 'Bootstrap'],
      github: 'https://lnkd.in/dD4i3j6A',
      demo: 'https://lnkd.in/dwf_KcuV',
    },
    {
      title: 'Daniels',
      type: 'ui',
      description: 'Responsive landing page.',
      image: 'assets/daniels.png',
      tech: ['HTML', 'CSS', 'Bootstrap'],
      github: 'https://lnkd.in/dmWp3Us9',
      demo: 'https://lnkd.in/dJKrD2SD',
    },
    {
      title: 'Mealfy',
      type: 'ui',
      description: 'Responsive website using HTML & CSS.',
      image: 'assets/mealfy.png',
      tech: ['HTML', 'CSS'],
      github: 'https://lnkd.in/d4v6dBc6',
      demo: 'https://lnkd.in/dJPeybwg',
    },
    {
      title: 'Fokir',
      type: 'ui',
      description: 'Responsive personal website.',
      image: 'assets/fokir.png',
      tech: ['HTML', 'CSS'],
      github: 'https://lnkd.in/dCNYGnPY',
      demo: 'https://lnkd.in/dacack8k',
    },
  ];
  filters = [
    { label: 'All', value: 'all' },
    { label: 'Angular', value: 'angular' },
    { label: 'UI Practice', value: 'ui' },
    { label: 'JavaScript', value: 'js' },
  ];
  filterDescriptions: Record<string, string> = {
    all: 'A mix of practice projects, learning experiments, and simple real-world work.',
    angular:
      'Angular projects built using component-based structure, routing, and basic application features.',
    ui: 'UI and responsive layout practice projects created to improve layout structure and responsiveness.',
    js: 'Vanilla JavaScript projects focused on fundamentals. I am currently revising JavaScript and will be adding more projects soon.',
  };
  activeFilter: string = 'all';
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
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter((p) => p.type === this.activeFilter);
  }
}
