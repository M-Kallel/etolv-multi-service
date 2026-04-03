import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>ACC Frontend</h1>
    <p>{{ message }}</p>
  `
})
export class App implements OnInit {
  message = 'Loading...';
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
  fetch('/backend/api/hello')
      .then(res => res.json())
      .then(data => {
        console.log('Fetch success:', data);
        this.message = data.message;
        this.cdr.detectChanges();
      })
      .catch(err => {
        console.error('Fetch error:', err);
        this.message = 'Error calling backend';
        this.cdr.detectChanges();
      });
  }
}