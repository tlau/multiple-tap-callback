if (Meteor.isClient) {
  Session.set('evtlog', []);

  Template.hello.items = function() {
    return [
      {name: 'Apple'},
      {name: 'Orange'},
      {name: 'Pear'},
      {name: 'Blueberry'}
    ];
  };

  Template.hello.evtlog = function() {
    return Session.get('evtlog');
  };

  Template.item.events({
    'tap': function() {
      console.log('You clicked:', this.name);
      var evtlog = Session.get('evtlog');
      evtlog.push({msg: 'You clicked: ' + this.name});
      Session.set('evtlog', evtlog);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
