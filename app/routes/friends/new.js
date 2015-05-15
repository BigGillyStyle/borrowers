import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    console.log('Creating a record');
    this.store.createRecord('friend');
  },
  deactivate: function () {
    var model = this.modelFor('friends/new');
    console.log('Model in deactivate: ', model);
    if (typeof model !== 'undefined' && model.get('isNew')) {
      console.log('Destroying model!');
      model.destroyRecord();
    }
  }
});
