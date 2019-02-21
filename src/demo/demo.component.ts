import { Component, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  title = 'app';

  alternate: boolean = false;
  toggle: boolean = false;
  color: boolean = false;
  size: number = 40;
  side: string = 'left';
  mobileWidthThreshold: number = 640;

  entryIndex: number = 0;
  
  @ViewChildren('entryComponent') entryComponents;
  @ViewChildren('timelineComponent') timelineComponents;

  entries = [
    {
      header: 'header',
      content: 'content'
    }
  ]

  addEntry() {
    this.entries.push({
      header: 'header',
      content: 'content'
    })
  }

  addCustomEntry() {
    this.entries.push({
      header: 'Gustavo Worker',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    })
  }

  removeEntry() {
    this.entries.pop();
  }

  onExpand(event, index) {
    console.log(event, index);
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }

    toggleEntryByIndex() { 

    debugger;

    const currentEntry =  this.entryComponents.find((item, index: number) => index === this.entryIndex);
    const path = [{localName: 'mgl-timeline-entry-dot'}]
    
    if (currentEntry) {
      currentEntry.toggle({path});
    }
  
    debugger;
  }

  test(){
    debugger
    this.timelineComponents._results[0].expandIndex(this.entryIndex);
  } 

}
