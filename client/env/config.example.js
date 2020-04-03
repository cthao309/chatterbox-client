// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

let PARSE_APP_ID = '72b8e073a4abde10221ce95f38ed1c63bd7f3d6b'
let PARSE_API_KEY = 'cf1ce23a61e2a40702c347b7dc1e0af8c28f6c7a';

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', 'PARSE_APP_ID');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', 'PARSE_API_KEY');
});

// Put your campus prefix here
window.CAMPUS = 'sfo';
