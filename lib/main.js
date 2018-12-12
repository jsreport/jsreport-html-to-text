var convert = require('html-to-text')
var extend = require('node.extend.without.arrays')

module.exports = function (reporter, definition) {
  reporter.documentStore.registerComplexType('htmlToText', {
    tables: { type: 'Edm.String' },
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

  reporter.documentStore.model.entityTypes['TemplateType'].htmlToText = { type: 'jsreport.htmlToText' }

  reporter.extensionsManager.recipes.push({
    name: 'html-to-text',
    execute: function (request, response) {
      var globalOptions = extend(true, {}, definition.options || {})
      var localOptions = extend(true, {}, request.template.htmlToText || {})
      var options = extend(true, {}, globalOptions, localOptions)

      if (!Array.isArray(options.tables)) {
        options.tables = (options.tables || '').split(',')
      }
      options.longWordSplit = options.longWordSplit || {}
      options.longWordSplit.wrapCharacters = options.longWordSplit.wrapCharacters || (options.longWordSplitWrapCharacters || '').split(',')
      options.longWordSplit.forceWrapOnLimit = options.longWordSplit.forceWrapOnLimit || options.forceWrapOnLimit

      response.meta.contentType = request.template.contentType || 'text/plain'
      response.meta.fileExtension = request.template.fileExtension || '.txt'

      const contentDisposition = request.template.contentDisposition || 'inline'

      response.meta.contentDisposition = contentDisposition + (
        contentDisposition.indexOf(';') !== -1 ? '' : ';filename=' + response.meta.reportName + '.' + response.meta.fileExtension
      )

      response.content = Buffer.from(convert.fromString(response.content.toString(), options))
    }
  })
}
