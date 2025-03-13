import moment from 'moment';

import { ApiCallerService } from '@/apps/api/src/app/modules/api-caller/api-caller.service';

class CollectionHepler {
  apiService: ApiCallerService;

  getCurrentDay() {
    const date = new Date();
    const momentDate = moment(date);
    return {
      start: momentDate.utc().startOf('day').toDate(),
      end: momentDate.utc().endOf('day').toDate(),
    };
  }

  getPastDay(number: number, unit: 'days' | 'hours' = 'days') {
    const date = new Date();
    const momentDate = moment(date).subtract(number, unit);
    const periodUnit = unit === 'hours' ? 'hour' : 'day';
    return {
      start: momentDate.clone().utc().startOf(periodUnit).toDate(),
      end: momentDate.clone().utc().endOf(periodUnit).toDate(),
    };
  }
}

export default new CollectionHepler();
