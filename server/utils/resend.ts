import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY as string)
const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
async function sendVerificationMail(email: string, token: string) {
  console.log('sendVerificationMail', baseUrl)
  const { data, error } = await resend.emails.send({
    from: 'Lumena <onboarding@resend.dev>',
    to: '22b03.joelc@sjec.ac.in',
    subject: 'Verify your email',
    html: `<p>Click <a href="${baseUrl}/verify/${token}">here</a> to verify your email.</p>`,
  })

  if (error) {
    console.error('Error sending email:', error)
    throw new Error('Failed to send verification email')
  }

  console.log(data)
}

export { sendVerificationMail }
