import Ember from 'ember';

export function decrementNum(params/*, hash*/) {
  return parseInt(parseInt(params[0]) - 1);
}

export default Ember.Helper.helper(decrementNum);
