import Ember from 'ember';

export default Ember.Controller.extend({
    filter:null,
    filterlist:Ember.computed('filter',function(){
      if(Ember.isEmpty(this.get('filter'))){
        return this.get('model');
      }
      var lesPokemonsCorrespondants = [];
      var lesPokemons = this.get('model').Pokedex.Pokemon;
      lesPokemonsCorrespondants = lesPokemons.filter(pokemon => {
        return (pokemon.Nom.search(this.get('filter')) > -1)
      });
    })
});
