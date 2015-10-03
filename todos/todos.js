Todos = new Meteor.Collection('todos');
if(Meteor.isClient){
  
  Template.todos.helpers({
    'todo' : function(){
      return Todos.find({},{sort:{createdAt:-1}});
    }
  });
  
  Template.addTodo.events({
    
    'submit form': function(event){
      event.preventDefault();
      var todoName = event.target.todoName.value;
      Todos.insert({
        name: todoNmae,
        completed: false,
        createdAt: new Date()
      });
    }
  });
  
  Template.todoItem.events({
    'click .delete-todo' : function(event){
      event.preventDefault();
      var documentId = this._id;
      var confirm = window.confirm("delete this task");
      if(confirm){
        Todos.remove({_id: documentId});
      }
    }
  });
  
}

if(Meteor.isServer){
  // server code goes here
}

