import { MglTimelineModule } from '../timeline/timeline.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';
import { CommonModule } from '@angular/common'; 

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class AppModule { }
