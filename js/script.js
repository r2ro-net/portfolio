var scene, camera, renderer, controls;
var eye1,eye2;
var light1,light2,light3,light4;
var target = new THREE.Vector3();
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var currentWidth = screen.width;

window.onload=function(){
  init();
  animate();
}

window.addEventListener("mousemove", onmousemove, false);

function init() {

  camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 );
  camera.position.z = 280;

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  scene = new THREE.Scene();

  light1 = new THREE.PointLight( 0xFFFFFF, 0.5);
  light1.position.set(200,200,250);
  scene.add(light1);

  const light = new THREE.AmbientLight( 0xFFFFFF );
  scene.add(light);

  var manager = new THREE.LoadingManager();

  var texture = new THREE.Texture();
  var texture2 = new THREE.Texture();

  var textureLoader = new THREE.ImageLoader( manager );
    textureLoader.load( 'models/Eyeball/textures/Eye_D2.jpg', function ( image ) {
    texture.image = image;
    texture.needsUpdate = true;
  } );
    textureLoader.load( 'models/Eyeball/textures/uv_eyeball2.jpg', function ( image ) {
      texture2.image = image;
      texture2.needsUpdate = true;
     });

  // load eye1 (right)
  var modelLoader = new THREE.OBJLoader();
    modelLoader.load( 'models/Eyeball/eyeball.obj', function ( object ) {
          eye1 = object;
          eye1.traverse( function ( child ) {
              if ( child instanceof THREE.Mesh ) {
                  child.material = new THREE.MeshPhongMaterial({
                     map: texture2,
                     color: 0xf2f2f2,
                     specular: 0xffffff,
                     shininess: 75
                  })
              }
          } );
          if(currentWidth < 600){
            eye1.scale.set(20,20,20);
            eye1.position.y = 50;
            eye1.position.x = 0;
            eye1.rotation.y = 0;
          } else {
            eye1.scale.set(30,30,30);
            eye1.position.y = 0;
            eye1.position.x = 100;
            eye1.rotation.y = 0;
          }

          scene.add( eye1 );
    } );
   // load eye2 (left)
    var modelLoader = new THREE.OBJLoader();
    modelLoader.load( 'models/Eyeball/eyeball.obj', function ( object ) {
          eye2 = object;
          eye2.traverse( function ( child ) {
              if ( child instanceof THREE.Mesh ) {
                  child.material = new THREE.MeshPhongMaterial({
                     map: texture,
                     color: 0xf2f2f2,
                     specular: 0xffffff,
                     shininess: 75
                  })
              }
          } );
          if(currentWidth < 600){
            eye2.scale.set(20,20,20);
            eye2.position.y = -50;
            eye2.position.x = 0;
            eye2.rotation.y = 0;
          } else {
            eye2.scale.set(30,30,30);
            eye2.position.y = 0;
            eye2.position.x = -100;
            eye2.rotation.y = 0;
          }
          scene.add( eye2 );
    } );

  window.addEventListener( 'resize', onWindowResize, false );
}

function onmousemove( event ) {

    mouseX = ( event.clientX - windowHalfX );
    mouseY = ( event.clientY - windowHalfY );
}


function animate() {
  requestAnimationFrame( animate );
  // follow mouse
  target.x += ( mouseX - target.x ) * .1;
  target.y += ( - mouseY - target.y ) * .1;
  target.z = camera.position.z;

  eye1.lookAt( target );
  eye2.lookAt( target );

  var time = Date.now() * 0.0005;
  render();
}

function render() {
  renderer.setClearColor( 0x000000, 0 );
  renderer.render( scene, camera );
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}
