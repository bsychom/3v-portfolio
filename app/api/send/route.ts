
import { ContactType } from '@/components/main/FormContact';
import { EmailTemplate } from '@/components/sub/email-template';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_JzwcHX35_LTX6ezJ2gtZQTYaNB4wuTFmU');

export async function POST(request: NextRequest) {
    try {
      const { email, name, message }: ContactType = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['mhaddaou@gmail.com'],
      subject: 'sending from portfolio',
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
