var convert = require('html-to-text')
var extend = require('node.extend')

function numberOrUndefined (param) {
  if (!isNaN(parseInt(param))) {
    return parseInt(param)
  }

  return undefined
}

function booleanOrUndefined (param) {
  if (param === true || param === 'true') {
    return true
  } else if (param === false || param === 'false') {
    return false
  }

  return undefined
}

module.exports = function (reporter, definition) {
  reporter.documentStore.registerComplexType('htmlToText', {
    tables: { type: 'Edm.String' },
    wordwrap: { type: 'Edm.Int32' },
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

      localOptions.wordWrap = numberOrUndefined(localOptions.wordWrap)
      localOptions.hideLinkHrefIfSameAsText = booleanOrUndefined(localOptions.hideLinkHrefIfSameAsText)
      localOptions.ignoreHref = booleanOrUndefined(localOptions.ignoreHref)
      localOptions.ignoreImage = booleanOrUndefined(localOptions.ignoreImage)
      localOptions.preserveNewlines = booleanOrUndefined(localOptions.preserveNewlines)
      localOptions.uppercaseHeadings = booleanOrUndefined(localOptions.uppercaseHeadings)
      localOptions.singleNewLineParagraphs = booleanOrUndefined(localOptions.singleNewLineParagraphs)
      localOptions.returnDomByDefault = booleanOrUndefined(localOptions.returnDomByDefault)
      localOptions.longWordSplitForceWrapOnLimit = booleanOrUndefined(localOptions.longWordSplitForceWrapOnLimit)

      var options = extend(true, {}, globalOptions, localOptions)
      if (!Array.isArray(options.tables)) {
        options.tables = (options.tables || '').split(',')
      }
      options.longWordSplit = options.longWordSplit || {}
      options.longWordSplit.wrapCharacters = options.longWordSplit.wrapCharacters || (options.longWordSplitWrapCharacters || '').split(',')
      options.longWordSplit.forceWrapOnLimit = options.longWordSplit.forceWrapOnLimit || (booleanOrUndefined(options.forceWrapOnLimit))

      response.content = Buffer.from(convert.fromString(response.content.toString(), options))
    }
  })
}
