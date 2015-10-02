PlayersList = new Mongo.Collection('players');
if (Meteor.isClient) {
  
  Template.addPlayerForm(event){
    'submit form': function(event){
    event.preventDefault();
    var playerNameVar = event.target.playerName.value;
    
    PlayersList.insert({
      name:playerNameVar,
      score:0
    });
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

