import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgitroComponent } from './resgitro.component';

describe('ResgitroComponent', () => {
  let component: ResgitroComponent;
  let fixture: ComponentFixture<ResgitroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgitroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
