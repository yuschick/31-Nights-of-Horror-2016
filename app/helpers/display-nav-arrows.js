import Ember from 'ember';

export function displayNavArrows(params, vals) {
  if ((parseInt(vals.id) === 1 && vals.dir === 'prev') || (parseInt(vals.id) === 31 && vals.dir === 'next')) {
  	return true;
  }
}

export default Ember.Helper.helper(displayNavArrows);
