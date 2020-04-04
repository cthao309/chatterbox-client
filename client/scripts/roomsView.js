var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    let roomContainer = {};

    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data.results);

      roomContainer = _.uniq(data.results, function(el) {
        if(el.roomname !== null || el.roomname !== undefined) {
          console.log('hello => ', el.roomname)
          return el.roomname;
        }
      });

    });
    console.log('unique rooms => ', roomContainer)
  },

  render: function() {
  },



};
