import dateHelpers from '../../../utils/date-helpers';
import { module, test } from 'qunit';

module('Utils: formatDate');

test('formats a date object', function(assert) {
  'use strict';

  let date = new Date('11-3-2015');
  let result = dateHelpers.formatDate(date, 'ddd MMM DD YYYY');

  assert.equal(result, 'Tue Nov 03 2015');
});
