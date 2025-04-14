import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Job, Queue } from 'bull';

import logger from '@/apps/worker/src/app/commons/Logger.common';
import { QUEUE_NAME_ORDER } from '@/apps/worker/src/app/constants/Job.constant';
import { PrismaService } from '@/shared/src/lib/services';
import { ORDERSTATUS } from '@prisma/client';

@Processor(QUEUE_NAME_ORDER)
export class OrderProcessor {
  constructor(
    @InjectQueue(QUEUE_NAME_ORDER) private readonly orderQueue: Queue,
    private readonly prisma: PrismaService,
  ) {}

  @Process('order-tracking')
  async orderTracking(job: Job<any>) {
    try {
      const { sig, index } = job?.data as any;
      await this.orderQueue.add(
        'order-update',
        { sig, index },
        { delay: 10 * 60 * 1000 }, // 10 minutes in ms
      );
    } catch (error) {
      logger.error(
        `Send Order Tracking To Queue Failed: ${JSON.stringify(error)}`,
      );
    }
  }

  @Process('order-update')
  async updateOrder(job: Job<any>) {
    try {
      const { sig, index } = job?.data as any;

      // await thi
      const order = await this.prisma.order.findFirst({
        where: {
          sig: sig,
          index: Number(index || '0'),
          orderStatus: ORDERSTATUS.PENDING,
        },
      });
      if (!order) {
        logger.error(`Order Not Found: ${sig} - ${index}`);
        return;
      }

      await this.prisma.order.update({
        where: {
          sig_index: {
            sig: order.sig,
            index: order.index,
          },
        },
        data: {
          orderStatus: ORDERSTATUS.OPEN,
        },
      });

      logger.info(`Update Order Successfully: ${sig} - ${index}`);
    } catch (error) {
      logger.error(`Update Order Failed: ${JSON.stringify(error)}`);
    }
  }
}
