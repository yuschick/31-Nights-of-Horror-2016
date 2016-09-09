import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	year: DS.attr(),
	summary: DS.attr(),
	notes: DS.attr(),
	image: DS.attr(),
	imdb: DS.attr(),
	trailer: DS.attr(),
	watch: DS.attr(),
	label: DS.attr(),
	tracking: DS.attr()
});
