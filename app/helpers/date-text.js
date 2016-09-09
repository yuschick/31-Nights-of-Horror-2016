import Ember from 'ember';

export function dateText(day) {
	const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	const dayFromDate = new Date("October "+ (parseInt(day)) +", 2016");
	return days[dayFromDate.getDay()] +', October '+ (parseInt(day));
}

export default Ember.Helper.helper(dateText);
