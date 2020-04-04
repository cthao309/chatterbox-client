var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


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

    // render message view
    messageView.render();
    return userOption;
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
