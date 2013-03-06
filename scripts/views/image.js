define([], function() {

    return Backbone.View.extend({
        tagName   : 'div',
        className : 'image span2',
        template  : _.template(
            '<img src="<%= path %>" width="140" height="140" data-id="<%= id %>" alt="<%= title %>">'
        ),

        events : {},

        initialize : function (options) {
            // this.model.on('change', this.render, this);
            // this.model.on('destroy', this.remove, this);
        },

        render : function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

});
