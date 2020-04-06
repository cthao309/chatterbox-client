var MessagesView = {

  $chats: $('#chats'),
  $submitMessageBtn: $('.submit'),

  initialize: () => {
    // add event listener on the click to add friend
    MessagesView.$chats.on('click', '.username', function() {
      // retreive the user selected friend name
      let selectedFriend = $(this)[0].innerText;

      // invoke the click handler function
      MessagesView.handleClick(selectedFriend);
    });
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

    // invoke roomView.handleChange method to render the current active room
    RoomsView.handleChange();

  },

  // method to generate the html tags to be render onto the page
  generateTemplate: function(messageData) {
    let html = ``;

    let friend;

    for ( let i = 0; i < messageData.length; i++) {
      if(messageData[i].friend && Array.isArray(messageData[i].friend)) {
        friend = messageData[i].friend.indexOf(window.location.search) >= 0 ? 'friend' : '';
      }
      html +=
      `<div class="chat">
        <div class="heading ${friend}">
          <div class="username ${friend}">
            ${messageData[i].username}
          </div>
          <span class="${friend}">${friend}</span>
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

  handleClick: function(friendName) {
    // declare a storage container based on the selected room
    Friends.addFriends(friendName);
  },

};