function buildLamp(){
	var onProgress = function(xhr){
		if(xhr.lengthComputable){
			var percenComplete = xhr.loaded / xhr.total * 100;
		}
	}
	var onError = function(xhr){};
	var mesh = new THREE.Object3D();
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('resources/hw4/');
	mtlLoader.load('Lamp.mtl', function(materials) {
		materials.preload();
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);
		objLoader.setPath('resources/hw4/');
		objLoader.load('Lamp.obj', function(object) {

			var obj =  unitize (object, 30);
			mesh.add(obj);
			obj.rotation.y = Math.PI / 2;
			mesh.position.set(-35,52,-40);
			mesh.traverse (
				function (mesh) {
					if (mesh instanceof THREE.Mesh) {
						mesh.castShadow = true;
						mesh.receiveShadow = true;
					}
				}
			);
			scene.add (mesh);
		}, onProgress, onError);
	});
}