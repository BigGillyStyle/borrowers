import FriendsBaseController from './base';

export default Ember.Controller.extend({
  actions: {
    cancel: function () {
      this.transitionToRoute('friends');
      return false;
    }
  }
});
