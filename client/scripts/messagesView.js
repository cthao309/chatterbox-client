var MessagesView = {

  $chats: $('#chats'),
  $submitMessageBtn: $('.submit'),

  initialize: () => {
    // MessagesView.$chats.on('click', '.username', this.handleClick);
  },

  // invoke when user clicked on the submit message
  handleSubmit: function() {
    let message = $('#message').val();

    // ?username=nate => nate or Nate
    let reformattedUserName = window.location.search.split('=')[1];

    // generate user message object
    let userMessageObj = {
      username: reformattedUserName,
      text: message,
      roomname: $('option:selected').val()
    };

    Messages.addMessage(userMessageObj, function() { console.log('Successfully created message')});

    console.log('created message => ', userMessageObj)

  },

  render: function(messageDB) {
    console.log('chat => ', messageDB);

    // remove the existing messages
    MessagesView.$chats.empty();

    let html = ``;

    for ( let i = 0; i < messageDB.length; i++) {
      html += `<div class="chat">
      <div class="username">
        ${messageDB[i].username}
        </div>
        <div class="message">
        ${messageDB[i].text}
      </div>
    </div>`
    }

    MessagesView.$chats.append(html)

  },

  handleClick: function() {
    // declare a storage container based on the selected room
    let selectedRoomMessages = Rooms.handleChange();

    // console.log('selected room => ', selectedRoomMessages)
  },

};