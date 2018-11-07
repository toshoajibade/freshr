const contentful = require('contentful')
export const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: '1z70a4v7vyxv',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken:
    'd8de7940bb3508fc72a9a699372187b76dea73001ede8f6d7f0be3616c242da7'
})
