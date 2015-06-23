var convert = require("html-to-text");

module.exports = function (reporter, definition) {
    reporter.documentStore.registerComplexType("htmlToText", {
        wordWrap: {type: "Edm.Number"}
    });

    reporter.documentStore.model.entityTypes["TemplateType"].htmlToText = {type: "jsreport.htmlToText"};

    reporter.extensionsManager.recipes.push({
        name: "html-to-text",
        execute: function(request, response) {
            response.content = new Buffer(convert.fromString(response.content.toString(), {
                wordwrap: (request.template.htmlToText || {}).wordWrap || 130
            }));
        }
    });
};
