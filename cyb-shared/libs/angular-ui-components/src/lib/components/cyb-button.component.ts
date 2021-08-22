import { Component } from '@angular/core';

@Component({
  selector: 'cyb-shared-button',
  template: `<button>{{ title }}</button>`,
})
export class CybButtonComponent {
  title = 'angularapp';
}
