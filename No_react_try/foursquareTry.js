https://api.foursquare.com/v2/venues/search?&ll=54.943433,20.15463&client_id=XLS14R0FF13HLWSQTW3OCWQIGVO22BPT2EBONMVZ54ISGVBQ&client_secret=TPHAWSJ0SEEO1DCZYIRYOJRTXVZFHOTAFIWAFGOJTFNSPRGB&v=20140806&m=foursquare

https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&

const request = require('request');

request({
  url: 'https://api.foursquare.com/v2/venues/explore',
  method: 'GET',
  qs: {
    client_id: 'CLIENT_ID',
    client_secret: 'CLIENT_SECRET',
    ll: '40.7243,-74.0018',
    query: 'coffee',
    v: '20180323',
    limit: 1
  }
}, function(err, res, body) {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
  }
});


// https://api.foursquare.com/v2/venues/search?ll=55.755826,37.6173&query=railway&intent=browse&radius=5000&client_id=XLS14R0FF13HLWSQTW3OCWQIGVO22BPT2EBONMVZ54ISGVBQ&client_secret=TPHAWSJ0SEEO1DCZYIRYOJRTXVZFHOTAFIWAFGOJTFNSPRGB&v=20140806&m=foursquare

// lat/long = 55.755826,37.6173; query = ShopMart; intent = browse; radius = 500

// https://api.foursquare.com/v2/venues/search?ll=55.755826,37.6173&query=train&intent=browse&radius=10000&client_id=XLS14R0FF13HLWSQTW3OCWQIGVO22BPT2EBONMVZ54ISGVBQ&client_secret=TPHAWSJ0SEEO1DCZYIRYOJRTXVZFHOTAFIWAFGOJTFNSPRGB&v=20140806&m=foursquare

// https://foursquare.com/v/foursquare-hq/4ef0e7cf7beb5932d5bdeb4e