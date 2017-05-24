import Ember from 'ember';


export default Ember.Helper.extend({
  compute(str) {
    return str.toLowerCase();
  }
});
