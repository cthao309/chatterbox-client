var MessagesView = {

  $chats: $('#chats'),

  initialize: () => {
  },

  render: function() {
    console.log('chat => ', $chats)
  },

  // method to add messages to the DOM
  renderMessage: () => {
    let testMessage =
      `
        <h1>
          Hello Charlie, how are you...
        </h1>
      `;

    messageView.render()

    MessagesView.$chats.append()
  },





};