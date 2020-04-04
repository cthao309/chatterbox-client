var MessagesView = {

  $chats: $('#chats'),
  $submitMessageBtn: $('.submit'),
  dummyData: [
    {
      objectId: "bsIwl7jqaS",
      username: "philip",
      roomname: "",
      text: "asdf",
      createdAt: "2020-04-04T18:47:45.909Z",
      updatedAt: "2020-04-04T18:47:45.909Z"
    },
    {
      objectId: "bsIwl7jqaS",
      username: "charlie",
      roomname: "",
      text: "asdf",
      createdAt: "2020-04-04T18:47:45.909Z",
      updatedAt: "2020-04-04T18:47:45.909Z"
    },
    {
      objectId: "bsIwl7jqaS",
      username: "nate",
      roomname: "",
      text: "asdf",
      createdAt: "2020-04-04T18:47:45.909Z",
      updatedAt: "2020-04-04T18:47:45.909Z"
    },
    {
      objectId: "bsIwl7jqaS",
      username: "will",
      roomname: "",
      text: "asdf",
      createdAt: "2020-04-04T18:47:45.909Z",
      updatedAt: "2020-04-04T18:47:45.909Z"
    },
  ],


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
    console.log('chat => ', MessagesView.dummyData);

    let html = '';

    for ( let i = 0; i < MessagesView.dummyData.length; i++) {
      html += MessagesView.render(MessagesView.dummyData[i])
    }

    MessagesView.$chat.append(html)

  },

  handleClick: function() {
    // declare a storage container based on the selected room
    let selectedRoomMessages = Rooms.handleChange();

    // console.log('selected room => ', selectedRoomMessages)
  },

};