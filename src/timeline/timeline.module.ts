import { MglTimelineEntryHeaderComponent } from './timeline-entry-header/timeline-entry-header.component';
import { MglTimelineEntryDotComponent } from './timeline-entry-dot/timeline-entry-dot.component';
import { MglTimelineEntryContentComponent } from './timeline-entry-content/timeline-entry-content.component';
import { MglTimelineEntrySideComponent } from './timeline-entry-side/timeline-entry-side.component';
import { MglTimelineEntryComponent } from './timeline-entry/timeline-entry.component';
import { MglTimelineComponent } from './timeline/timeline.component';

import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    MglTimelineComponent,
    MglTimelineEntryComponent,
    MglTimelineEntryHeaderComponent,
    MglTimelineEntrySideComponent,
    MglTimelineEntryContentComponent,
    MglTimelineEntryDotComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    MglTimelineComponent,
    MglTimelineEntryComponent,
    MglTimelineEntryHeaderComponent,
    MglTimelineEntrySideComponent,
    MglTimelineEntryContentComponent,
    MglTimelineEntryDotComponent
  ]
})
export class MglTimelineModule { }
