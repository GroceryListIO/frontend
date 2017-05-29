import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCtaComponent } from './homepage-cta.component';

describe('HomepageCtaComponent', () => {
  let component: HomepageCtaComponent;
  let fixture: ComponentFixture<HomepageCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
