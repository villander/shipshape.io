import { moduleFor, test } from 'ember-qunit';

moduleFor('route:blog/index', 'Unit | Route | blog/index', {
  needs: [
    'service:fastboot', 'service:headData', 'service:router-scroll'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
