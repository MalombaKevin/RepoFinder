import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarGithubComponent } from './nav-bar-github.component';

describe('NavBarGithubComponent', () => {
  let component: NavBarGithubComponent;
  let fixture: ComponentFixture<NavBarGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarGithubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
