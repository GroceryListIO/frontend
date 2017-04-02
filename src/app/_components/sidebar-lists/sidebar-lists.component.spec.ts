import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarListsComponent } from './sidebar-lists.component';

describe('SidebarListsComponent', () => {
  let component: SidebarListsComponent;
  let fixture: ComponentFixture<SidebarListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
