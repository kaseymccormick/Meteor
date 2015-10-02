PlayersList = new Mongo.Collection('players');
if(Meteor.isClient){
  Template.leaderboard.helpers({
  'player': function(){
  return PlayersList.find()
  },
  'otherHelperFunction': function(){
  return "Some other function"
  }
  });
  
console.log("Hello client");
}

if(Meteor.isServer){
console.log("Hello server");
}
