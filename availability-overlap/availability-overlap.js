
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  
  //template keyword searches through templates in meteor project
  //leaderboard keyword is a reference to the name of the template created
  //player keyword is the name we're giving to this function
  Template.current_dates.helpers({
    'now': function(){
      return moment().format('MMM Do YYYY [at] HH:mm:ss');
    },
    'tomorrow': function(){
      return moment().add(1,'days').format('MMM Do YYYY');
    }

  });
  


  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
   
  });
}

if (Meteor.isServer) {
  
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
