import * as cordova from "https://cdn.skypack.dev/cordova@11.0.0";





          function start() {
            return window.screen.orientation.lock('landscape');
          }
          function message() {
            return alert('test start');
          }





alert('Orientation is ' + window.screen.orientation.type);