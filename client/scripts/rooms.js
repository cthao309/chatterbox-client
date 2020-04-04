var Rooms = {
  uniqueRooms: {},

  // create html tag for the html select tag and appended to the DOM
  addRoom: function(room, cb = function() { return; }) {
    // add the new room
    this.uniqueRooms[room] = room;

    // console.log('add new room => ', this.uniqueRooms)

    // return all the new rooms
    cb(Object.keys(this.uniqueRooms))
  },

  // update the room if there are data from the -- app.js
  update: function(db, cb = function() { return; }) {
    let dataSize = Object.keys(Rooms.uniqueRooms).length;

    // filter all the unique rooms, loop through the data from API call
    for(let key of db) {
      // if room name is not equal to null, undefined or empty string
      if(key.roomname !== null && key.roomname !== undefined && key.roomname !== '') {
        // console.log('room name => ', key.roomname)

        // check if it is already exist in the unique rooms object
        if(!this.uniqueRooms[key.roomname]) {
          // prevent xss attack by limiting the
          if(key.roomname.length < 15) {
            // if it is not in there, store it there
            this.uniqueRooms[key.roomname] = key.roomname;
          }
        }
      }
    }

    // lobby
    // Lobby

    // console.log('new room set => ', this.uniqueRooms)

    // return all the unique rooms
    cb(Object.keys(this.uniqueRooms))
  },

};
