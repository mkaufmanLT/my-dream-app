import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styleUrls: ['./directive-assignment.component.css']
})
export class DirectiveAssignmentComponent {

  showParagraph = false;
  logs = [''];
  clickNumber = 1;

  onDisplayDetailsClick() {
    this.showParagraph = !this.showParagraph;
    this.logs.push('Click ' + this.clickNumber++ );
  }
}
