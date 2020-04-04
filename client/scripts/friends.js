var Friends = {

    friends: [],

    // created a method to add friend into the current user
    addFriends: function(userName) {
    // retreive current user name
    let currentUser = window.location.search;

    // retreive room value
    let room = $(`option:selected`).val();

    // access the database, and push the clicked name into the friend container
    this.friends.push(userName);
  }

};

// add event listener for make friend click
$('.userName').on('click', function() {
  let clickedMakeFriend = $(this).text();

  Friends.addFriends(clickedMakeFriend)
});