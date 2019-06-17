import { TestBed, async } from '@angular/core/testing';
import { ServiceComponent } from './service.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ServiceComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ServiceComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PS6'`, () => {
    const fixture = TestBed.createComponent(ServiceComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PS6');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ServiceComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to PS6!');
  });
});
