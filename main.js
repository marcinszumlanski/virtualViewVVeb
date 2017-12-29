window.addEventListener('load', onVrViewLoad)

var vrView;

var scenes = {
	B5: {
		image: 'img/B5.jpg',
		is_stereo: true
	}
}
function onVrViewLoad() {
    vrView = new VRView.Player('#vrview', {
  	width: '100%',
    height: 480,
    image: 'img/B5.jpg',
    is_stereo: true
    
  });


  vrView.on('ready', onVRViewReady);
  vrView.on('modechange', onModeChange);
  vrView.on('getposition', onGetPosition);
  vrView.on('error', onVRViewError);
}

function loadScene(id) {
  console.log('loadScene', id);

  // Set the image
  vrView.setContent({
    image: scenes[id].image,
    preview: scenes[id].preview//,
   // is_stereo: true,
   //is_autopan_off: true
  });

}

function onVRViewReady(e) {
  console.log('onVRViewReady');
  loadScene('B5');
}

function onModeChange(e) {
  console.log('onModeChange', e.mode);
}

function onVRViewError(e) {
  console.log('Error! %s', e.message);
}

function onGetPosition(e) {
    console.log(e)
}
