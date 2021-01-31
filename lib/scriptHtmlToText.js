const convert = require('html-to-text')

module.exports = async (inputs, callback, done) => {
  try {
    const textContent = convert.htmlToText(inputs.htmlContent, inputs.convertOptions)

    done(null, {
      textContent
    })
  } catch (e) {
    done(null, {
      error: {
        message: e.message,
        stack: e.stack
      }
    })
  }
}
