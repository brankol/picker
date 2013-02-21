define(['views/image'], function(ImageView) {

    var AvailableImagesView = Backbone.View.extend({

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
            view.parent = this;
            this.$el.append(view.render().el);
        },

        removeOne : function (id) {
            this.collection.remove(id);
        }

    });

    return AvailableImagesView;

});
