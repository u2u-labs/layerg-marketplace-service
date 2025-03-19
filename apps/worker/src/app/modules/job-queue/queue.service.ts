import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { JobOptions, Queue } from 'bull';

import {
  QUEUE_NAME_CMS,
  QUEUE_NAME_PROJECT,
  QUEUE_NAME_QUOTE_TOKEN_ACCEPT,
  QUEUE_NAME_USER,
} from '@/apps/worker/src/app/constants/Job.constant';

@Injectable()
export class QueueService {
  private defaultJobOptions: JobOptions = {
    attempts: process.env.MAX_RETRY as unknown as number, // Default number of retry attempts
    backoff: {
      type: 'fixed', // or 'exponential'
      delay: 5000, // Default delay of 5 seconds between retries
    },
    removeOnComplete: true,
    removeOnFail: true,
    timeout: 10000,
    // You can add other default settings here
  };
  constructor(
    @InjectQueue(QUEUE_NAME_CMS) private cmsQueue: Queue,
    @InjectQueue(QUEUE_NAME_PROJECT) private projectQueue: Queue,
    @InjectQueue(QUEUE_NAME_USER) private userQueue: Queue,
    @InjectQueue(QUEUE_NAME_QUOTE_TOKEN_ACCEPT) private quoteTokenQueue: Queue,
  ) {}
  async addJobToQueue(queue: Queue, jobType: string, jobData: any) {
    await queue.add(jobType, jobData, this.defaultJobOptions);
  }
  async addProjectJob(jobType: string, jobData: any) {
    await this.addJobToQueue(this.projectQueue, jobType, jobData);
  }
  async addUserJob(jobType: string, jobData: any) {
    await this.addJobToQueue(this.userQueue, jobType, jobData);
  }
  async addQuoteTokenAccessJob(jobType: string, jobData: any) {
    await this.addJobToQueue(this.quoteTokenQueue, jobType, jobData);
  }
  async addCMSJob(jobType: string, jobData: any) {
    await this.addJobToQueue(this.cmsQueue, jobType, jobData);
  }
}
