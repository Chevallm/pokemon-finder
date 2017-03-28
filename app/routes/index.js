import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.$.getJSON('pokemons.json');
  }
/*filterList:Ember.computed('filter',function(){
  if(Ember.isEmpty(this.get('filter'))){
    return this.get('model');
  }
})*/
});
