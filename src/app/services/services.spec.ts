import { TranslationService } from './translation.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('TranslationService', () => {
  let service: TranslationService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TranslationService);
  });

  it('can set language to en and change to gr', () => {
    service.setInitialLang('en');
    expect(service.getLang()).toEqual('en');
    service.changeLanguage();
    expect(service.getLang()).toEqual('gr');
  });

  it('can set language to en and change to gr', () => {
    service.setInitialLang('gr');
    expect(service.getLang()).toEqual('gr');
    service.changeLanguage();
    expect(service.getLang()).toEqual('en');
  });
});
