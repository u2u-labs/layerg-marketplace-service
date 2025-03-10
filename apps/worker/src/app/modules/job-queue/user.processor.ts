import { MailerService } from '@nestjs-modules/mailer';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

import { logger } from '@/apps/worker/src/app/commons';
import { QUEUE_NAME_USER } from '@/apps/worker/src/app/constants/Job.constant';

@Processor(QUEUE_NAME_USER)
export class UserProcessor {
  constructor(private mailService: MailerService) {}
  private readonly secretKeyConfirm = process.env.MAIL_KEY_CONFIRM;
  @Process('email-verify')
  async verifyEmail(job: Job<any>) {
    try {
      logger.error(`Send Mail Success: ${JSON.stringify(job?.data)}`);
      const { email, verifyToken, name } = job?.data as any;
      await this.mailService.sendMail({
        to: email,
        subject: 'Email Verify Account Marketplace',
        template: './email',
        context: {
          username: name,
          link: `${process.env.MAIL_REDIRECT_URL}/user/email-verification?token=${verifyToken}`,
        },
      });
      logger.info(`Send Mail Success: ${email}: ${JSON.stringify(job?.data)}`);
      return true;
    } catch (error) {
      logger.error(`Send Mail Failed: ${JSON.stringify(error)}`);
      return false;
    }
  }
}
