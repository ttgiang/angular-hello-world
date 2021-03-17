import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArchiveComponent } from './home-archive.component';

describe('HomeArchiveComponent', () => {
  let component: HomeArchiveComponent;
  let fixture: ComponentFixture<HomeArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
