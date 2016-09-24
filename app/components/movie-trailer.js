import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
    store: Ember.inject.service(),

    trackClick(id) {
        this.get('store').findRecord('movies', id).then(function(movie) {
            // console.log(movie.get('tracking.trailer'));
            movie.incrementProperty('tracking.trailer');
            movie.save();
        });
    },

    actions: {
        toggleTrailer(id) {
            const $container = $('.trailer-container'),
                self = this;
            $container.toggleClass('active');
            this.controller.toggleProperty('showTrailer');
            $('.arrow').toggleClass('tuck');
            $('.wallpaper-image').toggleClass('trailer');

            if (this.controller.get('showTrailer')) {
                self.trackClick(id);
            }
        }
    }
});
