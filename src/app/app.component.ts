import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `{{method()}}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() title = 'debuginspections';

  method(): number {
    let zero = 0;
    let one = zero + 1;
    return one;
  }
}
