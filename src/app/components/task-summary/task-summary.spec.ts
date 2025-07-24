import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskSummaryComponent } from './task-summary';

describe('TaskSummary', () => {
  let component: TaskSummaryComponent;
  let fixture: ComponentFixture<TaskSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
