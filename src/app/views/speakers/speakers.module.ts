import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakersComponent } from './speakers.component';

@NgModule({
  declarations: [SpeakersComponent],
  imports: [CommonModule, SpeakersRoutingModule, SharedModule],
})
export class SpeakersModule {}
