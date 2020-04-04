var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  filteredMessage: [],


  initialize: function() {

    // add event listener on when the user switch room
    RoomsView.$select.on('change', this.handleChange);

    // add event listener on when a clicked on the "Add Room" btn
    RoomsView.$button.on('click', this.handleClick);

  },

  handleChange: function() {
    // grab the option it is selected
    let userOption = $('select').val();
    // console.log('selected option => ', userOption);

    // reset filteredMessage after user change selection option
    RoomsView.filteredMessage = [];

    // retreive the new data set associate to the user selected room
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
         if(key['roomname'] === userOption) {
           RoomsView.filteredMessage.push(key);
         }
       }

      // if there are data, update the message board
      console.log('filter message => ', RoomsView.filteredMessage);

      MessagesView.render(RoomsView.filteredMessage);
      // render message view

      // return RoomsView.filteredMessage;
    });


  },

  // method to handle click on "Add Room"
  handleClick: function() {
    let userInputRoom = prompt('Enter room name: ');

    // check if it is a valid input
    if(userInputRoom !== null && userInputRoom !== '' && userInputRoom !== undefined) {
      // invoke the addRoom from room.js to create new room
      Rooms.addRoom(userInputRoom, function(newRoomSet) {
        // invoke the view in roomsView
        RoomsView.render(newRoomSet);

        // update our view in messageView
        // messageView.render();
      });
    } else {
      alert('Invalid room name. Please input a valid room name.')
    }

  },

  // render data
  render: function(roomArray) {

    // console.log('room => ', roomArray);

    // remove all the existing option in the selection list
    $('option').remove();

    // declare string template
    let html = ``;

    // loop through the array of room and generate the template
    for(let i = 0; i < roomArray.length; i++) {
      html += `<option data-room=${roomArray[i]}>${roomArray[i]}</option>`
    }

    // append as selection option
    RoomsView.$select.append(html);
  },



};
