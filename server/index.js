const express = require('express')
const consola = require('consola')
const axios = require('axios')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/subscribe', async (req, res) => {
  try {
    const addSubscriberToMailChimp = await axios.post(
      'https://us19.api.mailchimp.com/3.0/lists/c92b57593d/members/',
      req.body,
      {
        headers: {
          Authorization: `apikey b1b09ee39e997bb0b14ddba069cab908-us19`
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
})

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
