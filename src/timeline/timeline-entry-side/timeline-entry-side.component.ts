import { Component, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'mgl-timeline-entry-side',
  templateUrl: './timeline-entry-side.component.html',
  styleUrls: ['./timeline-entry-side.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MglTimelineEntrySideComponent {

  toggled: boolean = false;

  @ViewChild("firstLine") firstLine;
  @ViewChild("secondLine") secondLine;

  set alternate(value) {
    //xdebugger;
    //this.toggled = value;
    this.elementRef.nativeElement.classList.toggle('alternate', value);

    if(!value){
      this.secondLine.nativeElement.classList.add('disabledLine');
      this.firstLine.nativeElement.classList.remove('disabledLine');
    }else{
      this.secondLine.nativeElement.classList.remove('disabledLine');
      this.firstLine.nativeElement.classList.add('disabledLine');
    }
  }

  set mobile(value) {
    this.elementRef.nativeElement.classList.toggle('mobile', value);
  }
  
  constructor(private elementRef: ElementRef) { }

}
