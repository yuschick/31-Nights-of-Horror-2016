import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wallpaper-image', 'Integration | Component | wallpaper image', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{wallpaper-image}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#wallpaper-image}}
      template block text
    {{/wallpaper-image}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
