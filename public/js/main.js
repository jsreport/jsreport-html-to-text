define(["jquery", "app", "marionette", "underscore", "core/view.Base", "core/basicModel"],
    function($, app, Marionette, _, ViewBase, ModelBase) {

        var TemplateView = ViewBase.extend({
            tagName: "li",
            template: "html-to-text-template",

            initialize: function() {
                _.bindAll(this, "isFilled");
            },

            isFilled: function() {
                return this.model.isDirty();
            },

            onClose: function() {
                this.model.templateModel.unbind("api-overrides", this.model.apiOverride, this.model);
            }
        });

        var Model = ModelBase.extend({
            setTemplate: function (templateModel) {
                this.templateModel = templateModel;

                if (templateModel.get("htmlToText")) {
                    if (templateModel.get("htmlToText").isModel)
                        this.set(templateModel.get("htmlToText").toJSON());
                    else
                        this.set(templateModel.get("htmlToText"));
                }

                templateModel.set("htmlToText", this, { silent: true});

                this.listenTo(this, "change", function() {
                    templateModel.trigger("change");
                });

                this.listenTo(templateModel, "api-overrides", this.apiOverride);
            },

            isDirty: function() {
                return this.get("wordWrap") != null;
            },

            apiOverride: function(req) {
                req.template.htmlToText = {
                    wordWrap: this.get("wordWrap") || "..."
                };
            }
        });

        app.on("template-extensions-render", function(context) {
            var view;

            function renderRecipeMenu() {
                if (context.template.get("recipe") === "html-to-text") {
                    var model = new Model();
                    model.setTemplate(context.template);
                    view = new TemplateView({ model: model});

                    context.extensionsRegion.show(view, "htmlToText");
                } else {
                    if (view != null)
                        $(view.el).remove();
                }
            }

            renderRecipeMenu();

            context.template.on("change:recipe", function() {
                renderRecipeMenu();
            });
        });
    });
