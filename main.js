var vrView;

var scenes = {
	B5: {
		image: 'img/B5.jpg',
		//preview: 'img/green.jpg',
		is_stereo: false,
		hotspots: {
			B4: {
				pitch: 0,
				yaw: -120,
				radius: 0.05,
				distance: 1
			}    
		}
	},
	B4: {
		image: 'img/B4.jpg',
		is_stereo: false,
		hotspots: {
			B5: {
				pitch: 0,
				yaw: 110,
				radius: 0.05,
				distance: 1
			},
			B6: {
				pitch: 0,
				yaw: 170,
				radius: 0.05,
				distance: 1
			},
			B2: {
				pitch: 0,
				yaw: 90,
				radius: 0.05,
				distance: 1
			}        
		}
	},
	B6: {
		image: 'img/B6.jpg',
		is_stereo: false,
		hotspots: {
			B4: {
				pitch: 0,
				yaw: 110,
				radius: 0.05,
				distance: 1
			}	       
		}
	},
	B2: {
		image: 'img/B2.jpg',
		is_stereo: false,
		hotspots: {
			B4: {
				pitch: 0,
				yaw: 110,
				radius: 0.05,
				distance: 1
			},
			B1C4: {
				pitch: 0,
				yaw: 170,
				radius: 0.05,
				distance: 1
			}       
		}
	},
	B1C4: {
		image: 'img/B1C4.jpg',
		is_stereo: false,
		hotspots: {
			B2: {
				pitch: 0,
				yaw: 110,
				radius: 0.05,
				distance: 1
			},
			C4A3: {
				pitch: 0,
				yaw: 170,
				radius: 0.05,
				distance: 1
			}    
		}
	},
	C4A3: {
		image: 'img/C4A3.jpg',
		is_stereo: false,
		hotspots: {
			B1C4: {
				pitch: 0,
				yaw: 110,
				radius: 0.05,
				distance: 1
			},
			U1: {
				pitch: 0,
				yaw: 170,
				radius: 0.05,
				distance: 1
			}    
		}
	},
	U1: {
		image: 'img/U1.jpg',
		is_stereo: false,
		hotspots: {
			C4A3: {
				pitch: 0,
				yaw: 110,
				radius: 0.05,
				distance: 1
			} 
		}
	},
	}
	
window.addEventListener('load', onVrViewLoad)

function onVrViewLoad() {
    vrView = new VRView.Player('#vrview', {
  	width: '100%',
    height: 480,
    image: 'img/B5.jpg',
    is_stereo: false,
    is_debug: true
  });


  vrView.on('ready', onVRViewReady);
  vrView.on('modechange', onModeChange);
  vrView.on('click', onHotspotClick);
  vrView.on('error', onVRViewError);
  vrView.on('getposition', onGetPosition);
}

function loadScene(id) {
  console.log('loadScene', id);

  vrView.setContent({
    image: scenes[id].image,
    preview: scenes[id].preview
  });
  // Add all the hotspots for the scene
  var newScene = scenes[id];
  var sceneHotspots = Object.keys(newScene.hotspots);
  for (var i = 0; i < sceneHotspots.length; i++) {
    var hotspotKey = sceneHotspots[i];
    var hotspot = newScene.hotspots[hotspotKey];

    vrView.addHotspot(hotspotKey, {
      pitch: hotspot.pitch,
      yaw: hotspot.yaw,
      radius: hotspot.radius,
      distance: hotspot.distance
    });
  }

}

function onHotspotClick(e) {
 vrView.getPosition();
  console.log('onHotspotClick', e.id);
  if (e.id) {
    loadScene(e.id);
  }
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
    console.log('onGetPosition', e)
}