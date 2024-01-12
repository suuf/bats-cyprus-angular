import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { SharedModule } from '../../utilities/modules/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [SharedModule, RouterModule, ReactiveFormsModule],
  exports: [ContactFormComponent],
})
export class ContactFormModule {}
