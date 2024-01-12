import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'contact-form-component',
  templateUrl: `contact-form.component.html`,
})
export class ContactFormComponent implements OnInit {
  initialized = false;
  lang: string = 'en';

  constructor(
    private formBuilder: FormBuilder,
    private translationService: TranslationService
  ) {
    this.form = this.formBuilder.group({
      name: '',
      subject: '',
      message: '',
    });

    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
      subject: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000),
      ]),
    });
  }

  /** Contact Vars */
  form: FormGroup;

  ngOnInit() {
    this.translationService.initializedTranslations$.subscribe(
      (initialized) => {
        this.initialized = initialized;
        this.lang = this.translationService.getLang();
      }
    );
  }

  prepareEmail(): void {
    const link = document.getElementById('send_email') as HTMLAnchorElement;
    const name = this.form.controls['name'].value;
    const message = this.form.controls['message'].value;
    const subject = this.form.controls['subject'].value;
    const messageBody = 'Hello my name is ' + name + ' -- ' + message;
    const email = 'bats-cyprus@protonmail.com';
    const href = `mailto:${email}?subject=${subject}&body=${messageBody}`;
    link.setAttribute('href', href);
  }
}
