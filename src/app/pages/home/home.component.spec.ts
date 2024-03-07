import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render title', () => {
  //   // const fixture = TestBed.createComponent(HomeComponent);
  //   // fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain(
  //     'Bats Cyprus, bats-cyprus-angular'
  //   );
  // });

  // it('should translate text', () => {
  //   // get the name's input and display elements from the DOM
  //   const hostElement: HTMLElement = harness.routeNativeElement!;
  //   const nameInput: HTMLInputElement =
  //     hostElement.querySelector('div.jumbotron h1')!;
  //   const nameDisplay: HTMLElement = hostElement.querySelector('span')!;

  //   // simulate user entering a new name into the input box
  //   nameInput.value = 'title';

  //   // Dispatch a DOM event so that Angular learns of input value change.
  //   nameInput.dispatchEvent(new Event('input'));

  //   // Tell Angular to update the display binding through the title pipe
  //   harness.detectChanges();

  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain(
  //     'Bats Cyprus, bats-cyprus-angular'
  //   );

  //   expect(nameDisplay.textContent).toBe('Bats Cyprus');
  // });
});
