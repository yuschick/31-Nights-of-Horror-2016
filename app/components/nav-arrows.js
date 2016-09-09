import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
	actions: {
		fadeWallpaper() {
			$('.card-sub-header, .wallpaper-image').removeClass('active');
			$('.card-content, .trailer-content').fadeOut(10);
		}
	}
});
