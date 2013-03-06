define([], function() {

    return {
        // TODO: figure out how to reuse and augment the basic image.js template rather than copy/paste
        template  : _.template(
            '<img src="<%= path %>" width="140" height="140" data-id="<%= id %>" alt="<%= title %>">' +
            '<div class="actions"><a href="#" class="icon-remove js-unassign"></a></div>'
        ),

        // TODO: find out what happens to this event binding after the view is destroyed?
        events : {
            'click .js-unassign' : 'unassign'
        },

        unassign : function () {
            // this.$el.fadeOut(250);
            this.parentView.removeOne(this.model.id);
            this.remove();
        }
    };

});
