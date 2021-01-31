require('should')
const jsreport = require('jsreport-core')

describe('html to text recipe', () => {
  let reporter

  beforeEach(() => {
    reporter = jsreport().use(require('../')())
    return reporter.init()
  })

  afterEach(() => reporter.close())

  it('should work', async () => {
    const res = await reporter.render({
      template: {
        content: '<table><tr><td>Hello</td></tr></table>',
        engine: 'none',
        recipe: 'html-to-text'
      }
    })
    res.content.toString().should.containEql('Hello')
  })
})
