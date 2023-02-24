import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerServiceComponent', () => {
  let component: LoggerService;
  let fixture: ComponentFixture<LoggerService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggerService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggerService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
