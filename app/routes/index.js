import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel() {
        let now = new Date();
        const month = now.getMonth(),
            date = now.getDate();

        if (month === 9 && date !== 1) {
            this.transitionTo('movie', date);
        } else {
            this.transitionTo('movie', 1);
        }
    }
});
