import formData from 'form-data'
import Mailgun from 'mailgun.js'

const mailgun = new Mailgun(formData)
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY })

export const sendOrderConfirmation = async ({ email, details }) => {
  try {
    const response = await mg.messages.create('sandbox5300715b146f476097b83e3211f67708.mailgun.org', {
      from: 'Hair Salon Binjovic <mailgun@your-domain.com>',
      to: email,
      subject: 'Potvrda porudžbine',
      text: 'Hvala Vam na porudžbini',
      html: details
    })
    return response
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}
