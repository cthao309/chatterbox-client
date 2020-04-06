var Messages = {
  // data set
  messagesData: {},

  // add message onto the data
  addMessage: function(message, cb = function() { return; }) {
    // store the new message with its objectId

    Parse.create(message, cb);

    Messages.messagesData[message.objectId] = message;

    // invoke the callback function
    cb(Object.keys(Messages.messagesData));
  },

  // update the view messages
  update: function(messages, cb = function() { return; }) {
    cb(messages);
  },

}
