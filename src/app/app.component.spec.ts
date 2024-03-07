import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './utilities/modules/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();

    const headerElement: HTMLElement = compiled.querySelector('header-comp')!;
    expect(headerElement).toBeTruthy();

    const footerElement: HTMLElement = compiled.querySelector('footer-comp')!;
    expect(footerElement).toBeTruthy();
  });

  it(`should have as title 'bats-cyprus-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bats-cyprus-angular');
  });
});
