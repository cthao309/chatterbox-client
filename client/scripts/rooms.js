var Rooms = {

  // create html tag for the html select tag and appended to the DOM
  addRoom: function() {
    let userInputRoom = prompt('Enter room name: ');

    // retreive the user input
    let html = `<option data-room=${userInputRoom}>${userInputRoom}</option>`;

    // append as selection option
    $('select').append(html);
  },

  // may need to add an event listner onto the room name itself

};

// add event listener on the "Add Room"
$('button').on('click', function() {
  // invoke the addRoom method
   Rooms.addRoom();
});