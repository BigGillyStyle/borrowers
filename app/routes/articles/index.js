import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var articles = this.modelFor('friends/show').get('articles');
    if (articles.get('isFulfilled')) {
      articles.reload();
    }
    return articles;
  },
  deactivate: function () {
    // don't know what to do here (page 78 task)
  },
  actions: {
    save: function (model) {
      model.save();
      return false;
    }
  }
});
