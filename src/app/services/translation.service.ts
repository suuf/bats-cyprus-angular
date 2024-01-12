import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private changeLanguageSubject = new BehaviorSubject<'gr' | 'en' | null>(null);
  private language: 'en' | 'gr' | null = null;
  private translations: any;
  private initializedTranslations = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  translate(key: string): string {
    if (this.translations) {
      return this.translations[key] || key;
    }
    return key;
  }

  changeLanguage() {
    if (this.language == 'en') {
      this.language = 'gr';
      this.changeLanguageSubject.next('gr');
    } else {
      this.language = 'en';
      this.changeLanguageSubject.next('en');
    }
  }

  getLang(): 'en' | 'gr' {
    return this.language ? this.language : 'en';
  }

  setInitialLang(lang: any) {
    if (this.language) {
      return;
    }

    lang = this.validateLang(lang);
    this.loadTranslations(lang);
    this.setLang(lang);
  }

  get changeLanguage$() {
    return this.changeLanguageSubject.asObservable();
  }

  get initializedTranslations$() {
    return this.initializedTranslations.asObservable();
  }

  private loadTranslations(lang: 'gr' | 'en') {
    const translationUrl = `"../../../assets/translations_${lang}.json`;
    this.getTranslationFile(translationUrl).subscribe((translations) => {
      this.setTranslations(translations);
      this.setInitializedTranslations();
    });
  }

  private setInitializedTranslations() {
    this.initializedTranslations.next(true);
  }

  private setLang(lang: 'en' | 'gr') {
    this.language = lang;
  }

  private setTranslations(translations: any) {
    this.translations = translations;
  }

  private validateLang(lang: string): 'en' | 'gr' {
    if (lang == 'en' || lang == 'gr') {
      return lang;
    }
    return 'en';
  }

  private getTranslationFile(translationUrl: string) {
    return this.http.get<any>(translationUrl);
  }
}
