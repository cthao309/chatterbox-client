var Rooms = {

  // add event listener on the "add room" button
  // if it is clicked, prompt an alert message to input room name
  addRoom: function() {
    let userInputRoom = prompt('Enter room name: ');

    // retreive the user input
    let html = `<option data-room=${userInputRoom}>${userInputRoom}</option>`;

    // append as selection option
    $('select').append(html);
  },

  // may need to add an event listner onto the room name itself

};

$('button').on('click', function() {
   Rooms.addRoom();
});