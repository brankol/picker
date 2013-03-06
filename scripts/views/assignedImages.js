define(['views/image', 'views/withActions'], function(ImageView, withActions) {

    return Backbone.View.extend({

        tagName : 'div',
        className : 'assigned-images row',

        initialize : function () {
            // this.collection.on('add', this.addOne, this);
            // this.collection.on('remove', function () { console.log('remove from collection', this.collection); }, this);
        },

        render : function () {
            this.addAll();

            return this;
        },

        addAll : function() {
            this.collection.each(this.addOne, this);
        },

        addOne : function (model) {
            var view = new ImageView({ model : model });
            _.extend(view, withActions);
            view.parentView = this;
            view.delegateEvents(); // rebind events
            this.$el.append(view.render().el);
        },

        removeOne : function (id) {
            this.collection.remove(id);
        }

    });

});
