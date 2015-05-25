import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('article', {
      friend: this.modelFor('friends/show')
    });
  },
  actions: {
    save: function() {
      console.log('Saving article');
      var _this = this;
      var model = this.modelFor('articles/new');

      model.save().then(function() {
        _this.transitionTo('articles');
      });
    },
    cancel: function() {
      console.log('Canceling new article');
      this.transitionTo('articles');
    }
  }
});
