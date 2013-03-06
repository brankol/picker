define(['views/image'], function(ImageView) {

    return Backbone.View.extend({

        tagName : 'div',
        className : 'available-images row',

        initialize : function () {
            // console.log(this.collection.toJSON());
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
            view.parentView = this;
            this.$el.append(view.render().el);
        }

    });

});
