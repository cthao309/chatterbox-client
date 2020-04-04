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

    // invoke roomView.handleChange method to render the current active room
    RoomsView.handleChange();

  },

  // method to generate the html tags to be render onto the page
  generateTemplate: function(messageData) {
    let html = ``;

    for ( let i = 0; i < messageData.length; i++) {
      html +=
      `<div class="chat">
        <div class="username">
          ${messageData[i].username}
        </div>
        <div class="message">
          ${messageData[i].text}
        </div>
      </div>`
    }

    return html;
  },

  render: function(messageDB) {
    console.log('chat => ', messageDB);

    // remove the existing messages
    MessagesView.$chats.empty();

    let htmlTemplate = MessagesView.generateTemplate(messageDB);

    MessagesView.$chats.append(htmlTemplate)

  },

  handleClick: function() {
    // declare a storage container based on the selected room
    let selectedRoomMessages = Rooms.handleChange();

    // console.log('selected room => ', selectedRoomMessages)
  },

};