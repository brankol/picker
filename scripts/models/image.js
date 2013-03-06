define([], function () {

    var Image = Backbone.Model.extend({
        defaults : {
            path : '',
            variation : '',
            title : ''
        },
        initialize : function (attrs) {
            // this.setVariation(attrs.path);
            // console.log(attrs);
        },
        validate : function (attrs) {
            if (typeof attrs.path !== 'string' || !attrs.path.length) {
                return 'Invalid path';
            }

            // if (typeof attrs.variation !== 'string' || !attrs.variation.length) {
            //     return 'Invalid variation';
            // }
        },
        setVariation : function (path) {
            this.set({ 'variation' : 'square_small' }, { silent : true });
        },
        getVariation : function () {
            return this.get('variation');
        }
    });

    var AvailableImages = Backbone.Collection.extend({
        model : Image,
        url : 'repository.php'
    });

    var AssignedImages = Backbone.Collection.extend({
        model : Image,

        initialize : function (items, options) {
            this.on('add', this.serialize, this);
            this.on('remove', this.serialize, this);
            this.$el = options.$el;
        },
        serialize : function () {
            var assigned = [];

            if (this.models.length) {
                this.models.forEach(function (model) {
                    assigned.push(model.id);
                });
            } else {
                assigned = [];
            }

            this.$el.val(assigned.toString());
        }
    });

    return {
        Model : Image,
        Collections : {
            Available : AvailableImages,
            Assigned : AssignedImages
        }
    }

});
