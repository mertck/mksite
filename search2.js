function keyWordsearch(){
   gapi.client.setApiKey('AIzaSyDHllaimQIiBCoFtrsyoWff_YGch4kJhkM');
   gapi.client.load('youtube', 'v3', function(){
           makeRequest();
   });
}
function makeRequest(){
   var q = $('#query').val();
   var request = gapi.client.youtube.search.list({
           q: q,
           part: 'snippet',
           maxResults: 5
   });

   //var player;
   //function onYouTubeIframeAPIReady() {
    // player = new YT.Player('player', {
      // height: '390',
       //width: '640',
      // videoId: 'M7lc1UVf-VE',
       //events: {
        // 'onReady': onPlayerReady,
      //   'onStateChange': onPlayerStateChange
      // }
    // });
  // }

   request.execute(function(response)  {
           $('#results').empty()
           var srchItems = response.result.items;
           $.each(srchItems, function(index, item){
           vidTitle = item.snippet.title;
           vidThumburl =  item.snippet.thumbnails.default.url;
           vidThumbimg = '<pre><img id="thumb" src="'+vidThumburl+'" alt="No  Image  Available." style="width:204px;height:128px"></pre>';
           //vidPlayer = videoId:String, startSeconds:Number):Void;

           $('#results').append('<pre>' + vidTitle + vidThumbimg +   '</pre>');
   })
 })
}
