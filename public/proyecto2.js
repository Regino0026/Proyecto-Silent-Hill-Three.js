import * as THREE from './build/three.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { DotScreenPass } from 'three/addons/postprocessing/DotScreenPass.js';
import { GlitchPass } from 'three/addons/postprocessing/GlitchPass.js';
import { FilmPass } from 'three/addons/postprocessing/FilmPass.js';
import { MeshStandardMaterial } from 'three';



const scene = new THREE.Scene();
const color = 0xcccccc;
const density = 0.01;

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 15, 2000 );
camera.position.z = 75;
camera.position.y = 250;
camera.position.x = 220;


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

const pointlight = new THREE.PointLight(0xffffff, 4, 100);
pointlight.position.set(18, 5, 17);
scene.add(pointlight);

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, 100, 100 );

spotLight.castShadow = false;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.add( spotLight );


const planetext = new THREE.TextureLoader().load( 'img/grass2.jpg' );
var floorMaterial = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide , map: planetext})
    var floorGeometry = new THREE.PlaneGeometry(500, 500, 500, 500);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.position.y = -0.5;
	floor.rotation.x = Math.PI / 2;
	scene.add(floor);

const planetext1 = new THREE.TextureLoader().load( 'img/street_floor.jpg' );
var floorMaterial = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide , map: planetext1})
    var floorGeometry = new THREE.PlaneGeometry(300, 100, 300, 100);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.position.y = -0.5;
	floor.rotation.x = Math.PI / 2;
	scene.add(floor);

const scene1 = new THREE.Scene();
scene. fog = new THREE. FogExp2(color, density)

const building1 = new GLTFLoader();
const building2 = new GLTFLoader();
const lampara1 = new GLTFLoader();
const bed1 = new GLTFLoader();
const monster1 = new GLTFLoader();
const maria = new GLTFLoader();
const pyramid1 = new GLTFLoader();
const closer = new GLTFLoader();
const rusty_car = new GLTFLoader();
const building3 = new GLTFLoader();
const building4 = new GLTFLoader();

building3.load( 'models/sh_building3/scene.gltf', function ( gltf ) {
    const building3 = gltf.scene;
    scene.add( gltf.scene );
    building3.rotation.y = 11;
    building3.scale.set(3,3,3);
    building3.position.set(-100,0,80);

}, undefined, function ( error ) {

    console.error( error );

}  );




lampara1.load( 'models/lampara_lowpoly/scene.gltf', function ( gltf ) {
    const lampara1 = gltf.scene;
    scene.add( gltf.scene );
    lampara1.scale.set(0.05,0.05,0.05);
    lampara1.position.set(18,0,17);

}, undefined, function ( error ) {

    console.error( error );

}  );


building2.load( 'models/sh1_building2/scene.gltf', function ( gltf ) {
    const building2 = gltf.scene;
    scene.add( gltf.scene );
    building2.scale.set(24,24,24);
    building2.position.set(-83.5,0,30);
    

}, undefined, function ( error ) {

    console.error( error );

}  );

building1.load( 'models/sh1_building1/scene.gltf', function ( gltf ) {
    const building1 = gltf.scene;
	scene.add( gltf.scene );
    building1.scale.set(4,4,4);
    building1.position.x = 10;
    

}, undefined, function ( error ) {

	console.error( error );

}  );

closer.load( 'models/sh_closer/scene.gltf', function ( gltf ) {
    const closer = gltf.scene;
    scene.add( gltf.scene );
    closer.scale.set(0.1,0.1,0.1);
    closer.position.set(16,0,5);

}, undefined, function ( error ) {

    console.error( error );

}  );

rusty_car.load( 'models/rusty_car/scene.gltf', function ( gltf ) {
    const rusty_car = gltf.scene;
    scene.add( gltf.scene );
    rusty_car.scale.set(0.035,0.035,0.035);
    rusty_car.position.set(-103,0,5);

}, undefined, function ( error ) {

    console.error( error );

}  );

pyramid1.load( 'models/pyramid_head/scene.gltf', function ( gltf ) {
    const pyramid1 = gltf.scene;
    scene.add( gltf.scene );
    pyramid1.scale.set(5,5,5);
    pyramid1.position.set(-96,0,-3);

}, undefined, function ( error ) {

    console.error( error );

}  );
    
building4.load( 'models/sh_building4/scene.gltf', function ( gltf ) {
    const building4 = gltf.scene;
    
    scene.add( gltf.scene);
    building4.rotation.y = 22;
    building4.scale.set(3,3,3);
    building4.position.set(60,0,125);
    

}, undefined, function ( error ) {

    console.error( error );

}  );
/*

bed1.load( 'models/medical_bed/scene.gltf', function ( gltf ) {
    const bed1 = gltf.scene;
    scene.add( gltf.scene );
    

}, undefined, function ( error ) {

    console.error( error );

}  );

*/

monster1.load( 'models/lying_monster/scene.gltf', function ( gltf ) {
    const monster1 = gltf.scene;
    scene.add( gltf.scene );
    monster1.scale.set(4,4,4);
    monster1.position.set(-16,5,18);

    

}, undefined, function ( error ) {

    console.error( error );

}  );


const texture = new THREE.TextureLoader().load( 'models/sh1_building1/scene.bin' );
const texture3 = new THREE.TextureLoader().load( 'models/lampara_lowpoly/scene.bin' );
const texture2 = new THREE.TextureLoader().load( 'models/sh1_building2/scene.bin' );
const texture6 = new THREE.TextureLoader().load( 'models/sh_closer/scene.bin' );
const texture5 = new THREE.TextureLoader().load( 'models/lying_monster/scene.bin' );
const texture7 = new THREE.TextureLoader().load( 'models/rusty_car/scene.bin' );
const texture8 = new THREE.TextureLoader().load( 'models/pyramid_head/scene.bin' );
const texture9 = new THREE.TextureLoader().load( 'models/sh_building3/scene.bin' );
const texture10 = new THREE.TextureLoader().load( 'models/sh_building4/scene.bin');
/*
const texture4 = new THREE.TextureLoader().load( 'models/medical_bed/scene.bin' );

*/

var loader = new THREE.TextureLoader();
loader.load(
  'img/skybox1.jpg',
  function (texture) {
    var material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.BackSide 
    });

    var geometry = new THREE.SphereGeometry(500, 500, 500);
    var skybox = new THREE.Mesh(geometry, material);
    scene.add(skybox);
  }
);

renderer.outputColorSpace = THREE.SRGBColorSpace;
texture.colorSpace = THREE.SRGBColorSpace;
texture.flipY = false;

texture3.colorSpace = THREE.SRGBColorSpace;
texture3.flipY = false;

texture2.colorSpace = THREE.SRGBColorSpace;
texture2.flipY = false;

texture6.colorSpace = THREE.SRGBColorSpace;
texture6.flipY = false;

texture7.colorSpace = THREE.SRGBColorSpace;
texture7.flipY = false;

texture8.colorSpace = THREE.SRGBColorSpace;
texture8.flipY = false;

texture9.colorSpace = THREE.SRGBColorSpace;
texture9.flipY = false;

texture10.colorSpace = THREE.SRGBColorSpace;
texture10.flipY = false;
/*
texture4.colorSpace = THREE.SRGBColorSpace;
texture4.flipY = false;
*/
texture5.colorSpace = THREE.SRGBColorSpace;
texture5.flipY = false;

const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

const filmPass = new FilmPass(
    0.45, // noise intensity
    0.15, // scanline intensity
    648, // scanline count
    false // grayscale
);
filmPass.renderToScreen = true;
composer.addPass(filmPass);


function animate() {
    requestAnimationFrame(animate);
    composer.render();
    controls.update();
}



animate()