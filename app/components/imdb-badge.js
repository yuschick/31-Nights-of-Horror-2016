import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	actions: {
        trackClick(id) {
            this.get('store').findRecord('movies', id).then(function(movie) {
            	// console.log(movie.get('tracking.imdb'));
			  movie.incrementProperty('tracking.imdb');
			  // movie.save();
			});
        }
    }
});
