import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesFinderComponent } from './profiles-finder.component';

describe('ProfilesFinderComponent', () => {
  let component: ProfilesFinderComponent;
  let fixture: ComponentFixture<ProfilesFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
