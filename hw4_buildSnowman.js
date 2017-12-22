function buildSnowman(){
	var onProgress = function(xhr){
		if(xhr.lengthComputable){
			var percenComplete = xhr.loaded / xhr.total * 100;
		}
	}
	var onError = function(xhr){};
	snowman = new THREE.Object3D();
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('resources/hw4/');
	mtlLoader.load('SnowMan.mtl', function(materials) {
		materials.preload();
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);
		objLoader.setPath('resources/hw4/');
		objLoader.load('SnowMan.obj', function(object) {

			var obj =  unitize (object, 30);
			obj.rotation.y = -Math.PI * 1 / 4;
			snowman.add(obj);
			snowman.position.set(0,51,-20);
			snowman.traverse (
				function (meah) {
					if (meah instanceof THREE.Mesh) {
						meah.castShadow = true;
					}
				}
			);
		}, onProgress, onError);
	});
}