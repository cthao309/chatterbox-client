var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    // let roomContainer = {};

    // Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data.results);

      // roomContainer = _.uniq(data.results, function(el) {
      //   if(el.roomname !== null || el.roomname !== undefined) {
      //     console.log('hello => ', el.roomname)
      //     return el.roomname;
      //   }
      // });

      // for(let key of data.results) {
      //   if(key.roomname !== null && key.roomname !== undefined && key.roomname !== '') {
      //     console.log('room name => ', key.roomname)
      //     if(!this.roomContainer[key.roomname]) {
      //       this.roomContainer[key.roomname] = key.roomname;
      //     }
      //   }
      // }

      // console.log('unique rooms => ', Object.values(roomContainer))
    // });

    // add event listener on when the user switch room
    RoomsView.$select.on('change', function() {
      // invoke handleChange
      RoomsView.handleChange();
    });

    // add event listener on when a clicked on the "Add Room" btn
    RoomsView.$button.on('click', this.handleClick);

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

    console.log('room => ', roomArray);

    let html = ``;

    // loop through the array of room and generate the template
    for(let i = 0; i < roomArray.length; i++) {
      html += `<option data-room=${roomArray[i]}>${roomArray[i]}</option>`
    }

    // append as selection option
    RoomsView.$select.append(html);
  },



};
