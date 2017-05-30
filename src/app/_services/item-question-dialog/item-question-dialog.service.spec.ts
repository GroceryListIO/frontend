import { TestBed, inject } from '@angular/core/testing';

import { ItemQuestionDialogService } from './item-question-dialog.service';

describe('ItemQuestionDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemQuestionDialogService]
    });
  });

  it('should ...', inject([ItemQuestionDialogService], (service: ItemQuestionDialogService) => {
    expect(service).toBeTruthy();
  }));
});
