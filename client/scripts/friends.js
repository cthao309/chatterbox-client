var Friends = {

    // declared the database
      chatterBoxDataBase: {},

    // created a method to add friend into the current user
      addFriends: function(userName) {
        // retreive current user name
        let currentUser = window.location.search;

        // retreive room value
        let room = $(`option:selected`).val();

        // access the database, and push the clicked name into the friend container
        this.chatterBoxDataBase.room.currentUser[friends].push(userName);
      }

};

/*
 database = {
   roomName: [ { userObj }]
 }

userName = {
  userName: string,
  createdDate: date,
  friends: [],
}

//attach an event listener onto the displayed message on name
  // if a name is clicked, retreive the clicked name
  // push into the friends container
*/

// const database = {
//   chatterbox: {
//     userName: {

//     }
//   }
// }

// ensure that we have the correct room data
$('.userName').on('click', function() {

  // invoke the  Friend

  // console.log('hello => ', $(this).text())
  // // already know the userName
  // console.log(window.location.search)

  // // already know the room
  // let room = $('option:selected').val()

  // console.log('room => ', room)
  // // access the database of the current selected room
  // let chatData = database[room]

  // // access the database

})

console.log('userName => ', window.location.search)