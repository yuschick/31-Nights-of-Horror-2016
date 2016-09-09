import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('imdb-badge', 'Integration | Component | imdb badge', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{imdb-badge}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#imdb-badge}}
      template block text
    {{/imdb-badge}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
