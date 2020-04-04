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
    // grab the data size
    // let dataLength = Object.keys(Messages.messageData).length;

    // check there has been a change in the data
    // if(messages.length !== dataLength) {
    //   // pass the new data message set to the callback
      cb(Object.keys(Messages.messagesData));
    // }
  }

}
