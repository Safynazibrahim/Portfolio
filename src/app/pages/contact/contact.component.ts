import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule, 
    ToastModule,
    CommonModule
  ],
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
  providers: [MessageService],
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private messageService: MessageService) {}

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
  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSending = false;
  sendMessage() {
    if (!this.form.name || !this.form.email || !this.form.message) {
      return;
    }

    this.isSending = true;

    emailjs
      .send(
        'service_le4jmfv',
        'template_4xo12us',
        {
          from_name: this.form.name,
          from_email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
        },
        'Dsv8m0--15cqTaKt2',
      )
      .then(() => {
        this.isSending = false;
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: '',
        };
        this.messageService.add({
          severity: 'success',
          summary: 'Message Sent',
          detail: 'Thank you! I will get back to you soon.',
        });
      })
      .catch(() => {
        this.isSending = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to send message. Please try again.',
        });
      });
  }
}
