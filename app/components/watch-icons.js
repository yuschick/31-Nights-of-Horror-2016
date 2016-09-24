import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	actions: {
        trackClick(id, platform) {
            this.get('store').findRecord('movies', id).then(function(movie) {
            	// console.log(movie.get('tracking.'+platform));
			  movie.incrementProperty('tracking.'+platform);
			  movie.save();
			});
        }
    }
});
