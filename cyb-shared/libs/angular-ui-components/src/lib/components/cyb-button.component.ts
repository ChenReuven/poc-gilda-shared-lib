import { Component } from '@angular/core';
import '../../../../cyb-styles/style.scss';

@Component({
  selector: 'cyb-shared-button',
  template: ` <div>
    <h1>This is Angular Cyb Button</h1>
    <button>{{ title }}</button>
  </div>`,
  styleUrls: ['cyb-button.component.scss'],
})
export class CybButtonComponent {
  title = 'cyb angular button';
}
