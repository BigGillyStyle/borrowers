import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null, // passed-in
  articleStates: null, // passed-in
  autoSave: function () {
    console.log('AutoSaving the article');
    var article = this.get('article');
    if (!article.get('isNew')) {
      this.sendAction('save', article);
    }
  },
  stateChanged: Ember.on('init', Ember.observer('article.state', function () {
    console.log('The article state has changed');
    var article = this.get('article');
    console.log('The article is dirty: ', article.get('isDirty'));
    console.log('The article is saving: ', article.get('isSaving'));
    if (article.get('isDirty') && !article.get('isSaving')) {
      Ember.run.once(this, this.autoSave);
    }
  }))
});
