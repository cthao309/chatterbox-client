var Friends = {

    // created a method to add friend into the current user
    addFriends: function(userName) {
      // retreive the new data set associate to the user selected room
      let addFriend = window.location.search.split('=')[1];

      Parse.readAll((data) => {
        // examine the response from the server request:
        console.log('handle change roomsView.js =>', data);

        // base case: if no data, exist
        if(!data.results || !data.results.length) {
          return;
        }

        /*
          {
            username: 'shawndrost',
            text: 'trololo',
            roomname: '4chan'
          }
        */

        // perform filter to retreive the user selected room
        for (let key of data.results) {
          // check if each message has a roomname match with user selected room name
          if(key['username'] === userName) {
            if(!key.friend) {
              key.friend = [addFriend];
            } else {
              key.friend.push(addFriend)
            }

            RoomsView.filteredMessage.push(key);
          }
        }

        MessagesView.render(RoomsView.filteredMessage);

      });
  },

};
