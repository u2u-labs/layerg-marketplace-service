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

  getPastDay(number: number) {
    const date = new Date();
    const momentDate = moment(date).subtract(number, 'days');
    return {
      start: momentDate.utc().startOf('day').toDate(),
      end: momentDate.utc().endOf('day').toDate(),
    };
  }
}

export default new CollectionHepler();
