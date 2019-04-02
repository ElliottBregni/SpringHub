import { Component, Input } from '@angular/core';

import { error } from '../core';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-errors.component.html'
})
export class ListErrorsComponent {
  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: error) {
    this.formattedErrors = Object.keys(errorList.error || {})
      .map(key => `${key} ${errorList.error[key]}`);
  }

  get errorList() { return this.formattedErrors; }


}
