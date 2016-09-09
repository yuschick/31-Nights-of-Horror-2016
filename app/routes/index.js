import Ember from 'ember';
// import $ from 'jquery';
// import delay from 'ember-delay/delay';

export default Ember.Route.extend({
    beforeModel() {
        let now = new Date();
        const month = now.getMonth(),
            date = now.getDate();

        if (month === 9 && date !== 1) {
            this.transitionTo('movie', date - 1);
        } else {
            this.transitionTo('movie', 1);
        }
    },
    model() {
        // return this.store.findRecord('movies', 0);
    },
    afterModel(movies) {
        // if (movies.get('label')) {
        //     delay(200).then(function() {
        //         $('.card-sub-header').addClass('active');
        //     });
        // }

        // delay(250).then(function() {
        //     $('.wallpaper-image').addClass('active');
        // });
    }
});
