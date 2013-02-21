define([
    'models/image',
    'views/assignedImages',
    'views/availableImages',
    'text!views/templates/modal.html'
],
function(Image, AssignedImagesView, AvailableImagesView, ModalTemplate) {

    /*
    AssignedImagesView
        if configured to have upload functionality
            check browser capabilities
                if yes, mixin dnd
                if no, declare the browser incompetent
    */

    return Backbone.View.extend({

        initialize : function (options) {
            if (options.el.nodeType !== 1) {
                throw new Error('ImagePicker: element is mandatory');
            }

            this.config = this.$el.data('config') || {};

            if (!this.config.variation) {
                throw new Error('ImagePicker: config.variation must be specified');
            }

            if (!this.config.repositoryUrl) {
                throw new Error('ImagePicker: config.repositoryUrl must be specified');
            }
            // TODO pass the repositoryUrl to the image model

            this.$el.wrap('<div class="picker_container"></div>');
            this.$container = this.$el.parent();
            this.collections = {};
            this.views = {};

            // populate collections
            // TODO should be read from the file input
            this.collections.AssignedImages = new Image.Collections.Assigned([
                { "id" : 1, "path" : "/repository/001_square_small.jpg", "title" : "Image 1" },
                { "id" : 2, "path" : "/repository/002_square_small.jpg", "title" : "Image 2" },
                { "id" : 3, "path" : "/repository/003_square_small.jpg", "title" : "Image 3" }
            ], { '$el' : this.$el });
            this.collections.AvailableImages = new Image.Collections.Available();

            // init views
            this.views.Assigned = new AssignedImagesView({ collection : this.collections.AssignedImages });

            this.render();
            this.bindEvents();
        },

        bindEvents : function () {
            this.$container.on('click', '.js-show-available', $.proxy(this.handleAvailable, this));
        },

        render : function () {
            this.$container.append('<div class="actions"><button class="btn btn-primary js-show-available" data-toggle="modal" data-target="#myModal" data-loading-text="Loading...">Choose</button></div>');
            this.$container.append(this.views.Assigned.render().el);
            this.$container.append(ModalTemplate);

            return this;
        },

        handleAvailable : function () {
            // TODO this should be executed after the first click on the Add button
            // and then cached? but what if new images arrive?
            // also, modal should be opened immediately and populated with available images later
            if (!this.collections.AvailableImages.length) {
                this.collections.AvailableImages.fetch().then($.proxy(this.renderAvailableImagesView, this));
            }
        },

        renderAvailableImagesView : function () {
            this.views.Available = new AvailableImagesView({ collection : this.collections.AvailableImages });
            $('#myModal .modal-body').html(this.views.Available.render().el);
        }

    });

});
