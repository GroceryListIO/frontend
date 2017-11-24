import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

declare let ga: Function;

@Injectable()
export class GoogleAnalyticsEventsService {
  public emitEvent(eventCategory: string, eventAction: string, eventLabel: string = null, eventValue: number = null) {
    if (isDevMode()) {return};
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }
}
