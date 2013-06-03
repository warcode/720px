  <script id="followedStreams" type="text/html">
  <div style="text-align:center; padding:20px;">
  <span class="smalltext">
  <strong>Live streams:</strong> 
  <br> 
  {{#streams}}
  <div>
  {{#channel}}<a href="#" class='stream-link light' onClick="embedChannel('{{name}}')">{{name}}</a> [<a href="#" class='stream-link light' onClick="embedChannelWithChat('{{name}}')">c</a>][<a href="http://twitch.tv/{{name}}" target="_blank" class='stream-link light'>n</a>] - {{status}}{{/channel}}
  </div>
  {{/streams}}{{^streams}}No streams online.{{/streams}}
  </div>
  <div>
  </script>

  <script id="followedStreams-dark" type="text/html">
  <div style="text-align:center; padding:20px;">
  <span class="smalltext">
  <strong>Live streams:</strong> 
  <br> 
  {{#streams}}
  <div>
  {{#channel}}<a href="#" class='stream-link light dark' onClick="embedChannel('{{name}}')">{{name}}</a> [<a href="#" class='stream-link light dark' onClick="embedChannelWithChat('{{name}}')">c</a>][<a href="http://twitch.tv/{{name}}" target="_blank" class='stream-link light'>n</a>] - {{status}}{{/channel}}
  </div>
  {{/streams}}{{^streams}}No streams online.{{/streams}}
  </div>
  <div>
  </script>

  <script id="embedChannel" type="text/html">
  <div>
  <center>
  <object type="application/x-shockwave-flash" height="750" width="1280" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel={{channel}}" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="enable_javascript=true&auto_play=false&channel={{channel}}&start_volume=25" />
  </object>
  </center>
  </div>
  </script>


  <script id="embedChannelAndChat" type="text/html">
  <div style="padding:0; float:left;">
  <center>
  <object type="application/x-shockwave-flash" height="750" width="1280" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel={{channel}}" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="auto_play=false&channel={{channel}}&start_volume=25" />
  </object>
  </div>
  <div id="chat_embed" style="padding:0; float:left; border: 0; overflow: hidden !important;" >
  <iframe frameborder="0" scrolling="no" id="chat_embed" src="http://twitch.tv/chat/embed?channel={{channel}}&amp;popout_chat=true&quot;" height="750" width="495"></iframe>
  </div>
  </center>
  <div style="clear: both;">
  </div>
  </script>

  <script id="userData" type="text/html">
  <img src={{logo}} width="24" height="24"></img> [<b>{{display_name}}</b>]</center>
  </script>