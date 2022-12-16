import * as cordova from "https://cdn.skypack.dev/cordova@11.0.0";


function getAccel(){
  DeviceMotionEvent.requestPermission().then(response => {
      if (response == 'granted') {


          function start() {
            return window.screen.orientation.lock('landscape');
          }
          function message() {
            return alert('test start');
          }



}
  });
}

alert('Orientation is ' + window.screen.orientation.type);