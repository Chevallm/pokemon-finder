import Ember from 'ember';

export default Ember.Controller.extend({
  filter: null,
  pokemonselect: null,
  filterlist: Ember.computed('filter', function() {
    if (Ember.isEmpty(this.get('filter'))) {
      return this.get('model').Pokedex.Pokemon;
    }
    var lesPokemonsCorrespondants = [];
    var lesPokemons = this.get('model').Pokedex.Pokemon;
    lesPokemonsCorrespondants = lesPokemons.filter(pokemon => {
      return (pokemon.Nom.toLowerCase().search(this.get('filter').toLowerCase()) > -1);
    });
    return lesPokemonsCorrespondants;
  })

});
