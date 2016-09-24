import Ember from 'ember';
import $ from 'jquery';
import delay from 'ember-delay/delay';

export default Ember.Route.extend({
  loadImage: function(url) {
    var wallpaper = new Image();
    wallpaper.src = 'assets/images/wallpapers/' + url;
    wallpaper.onload = function() {
      $('.wallpaper-image').addClass('active');
      $('.card-content, .trailer-content').fadeIn(50);
    };
  },
  model(params) {
    const self = this;
    return delay(100).then(function() {
      return self.store.findRecord('movies', params.movie_id);
    });
  },
  afterModel(movies) {
    if (movies.get('label')) {
      delay(200).then(function() {
        $('.card-sub-header').addClass('active');
      });
    }
    this.loadImage(movies.get('image'));
  }
});
