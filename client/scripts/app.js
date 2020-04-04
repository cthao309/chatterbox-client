var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // retreive the data every 5 second
    // setInterval(App.fetch, 10000);

  },

  fetch: function(callback = function(){ return; }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      // base case: if no data, exist
      if(!data.results || !data.results.length) {
        return;
      }

      // if there are data, update the rooms and render to the DOM
      Rooms.update(data.results, RoomsView.render);

      // if there are data, update the message board
      // Messages.update(data.results, MessagesView.render);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
