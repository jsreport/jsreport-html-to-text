const path = require('path')
const extend = require('node.extend.without.arrays')

module.exports = function (reporter, definition) {
  reporter.documentStore.registerComplexType('htmlToText', {
    tables: { type: 'Edm.String' },
    tablesSelectAll: { type: 'Edm.Boolean' },
    wordWrap: { type: 'Edm.Int32' },
    linkHrefBaseUrl: { type: 'Edm.String' },
    hideLinkHrefIfSameAsText: { type: 'Edm.Boolean' },
    ignoreHref: { type: 'Edm.Boolean' },
    ignoreImage: { type: 'Edm.Boolean' },
    preserveNewlines: { type: 'Edm.Boolean' },
    decodeOptions: { type: 'Edm.String' },
    uppercaseHeadings: { type: 'Edm.Boolean' },
    singleNewLineParagraphs: { type: 'Edm.Boolean' },
    baseElement: { type: 'Edm.String' },
    returnDomByDefault: { type: 'Edm.Boolean' },
    longWordSplitWrapCharacters: { type: 'Edm.String' },
    longWordSplitForceWrapOnLimit: { type: 'Edm.Boolean' }
  })

  reporter.documentStore.model.entityTypes.TemplateType.htmlToText = { type: 'jsreport.htmlToText' }

  reporter.extensionsManager.recipes.push({
    name: 'html-to-text',
    execute: async function (request, response) {
      const globalOptions = extend(true, {}, definition.options || {})
      const localOptions = extend(true, {}, request.template.htmlToText || {})
      const options = extend(true, {}, globalOptions, localOptions)

      if (!Array.isArray(options.tables)) {
        options.tables = (options.tables || '').split(',')
      }
      if (options.tablesSelectAll === true) {
        options.tables = true
      }

      options.longWordSplit = options.longWordSplit || {}
      options.longWordSplit.wrapCharacters = options.longWordSplit.wrapCharacters || (options.longWordSplitWrapCharacters || '').split(',')
      options.longWordSplit.forceWrapOnLimit = options.longWordSplit.forceWrapOnLimit || options.forceWrapOnLimit

      const result = await reporter.executeScript({
        htmlContent: response.content.toString(),
        convertOptions: options
      }, {
        execModulePath: path.join(__dirname, 'scriptHtmlToText.js')
      }, request)

      if (result.error) {
        const error = new Error(result.error.message)
        error.stack = result.error.stack

        throw reporter.createError('Error while processing html-to-text', {
          original: error,
          weak: true
        })
      }

      response.content = Buffer.from(result.textContent)

      response.meta.contentType = request.template.contentType || 'text/plain'
      response.meta.fileExtension = request.template.fileExtension || '.txt'

      const contentDisposition = request.template.contentDisposition || 'inline'

      response.meta.contentDisposition = contentDisposition + (
        contentDisposition.indexOf(';') !== -1 ? '' : ';filename=' + response.meta.reportName + '.' + response.meta.fileExtension
      )
    }
  })
}
