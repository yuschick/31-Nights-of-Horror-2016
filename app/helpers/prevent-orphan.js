import Ember from 'ember';

export function preventOrphan(params) {
  	let text = params[0];
	let n = text.toLowerCase().lastIndexOf(" ");
	const pat = new RegExp(" ", "i");
	return text.slice(0, n) + text.slice(n).replace(pat, "&nbsp;");
}

export default Ember.Helper.helper(preventOrphan);
