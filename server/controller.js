const sgMail = require('@sendgrid/mail')
const axios = require('axios')


module.exports = {
  async sendMessage(req, res) {
    try {    
      sgMail.setApiKey(process.env.SENDGRID_API)
      const msg = {
        to: 'diamstarajibade@gmail.com',
        from: req.body.email_address,
        subject: 'New Message from Subscriber',
        text: req.body.message,
      }
      let event = await sgMail.send(msg)

      console.log(event[0].statusCode)
      if (event[0].statusCode === 202) {
        res.status(200).send({msg: `success`})
      }
    } catch (err) {
      res.status(400).send({msg: `failed`})
    }
  },

  async addSubsciber(req, res) {
    try {
      const addSubscriberToMailChimp = await axios.post(
        `${process.env.MAILCHIMP_LIST}`,
        req.body,
        {
          headers: {
            Authorization: `apikey ${process.env.MAILCHIMP_APIKEY}`
          }
        }
      )
      if (addSubscriberToMailChimp.status === 200)
        res.status(200).send({ message: `success` })
    } catch (err) {
      if (err.response.data) {
        err.response.data.title === `Member Exists`
          ? res.status(304).send({ msg: `member already exist` })
          : res.status(400).send({ msg: `failed` })
      } else {
        res.status(400).send({ msg: `failed` })
      }
    }
  }
}
