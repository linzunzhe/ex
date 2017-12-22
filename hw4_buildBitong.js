function buildBitong(){
	THREE.ImageUtils.crossOrigin = '';
	texture = THREE.ImageUtils.loadTexture('resources/hw4/bitong.png');
	texture.repeat.set(1, 1);
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.minFilter = THREE.LinearFilter;
	var materialArray = [
		new THREE.MeshPhongMaterial({ // +x
			map: texture,
			transparent: true,
			side: THREE.DoubleSide
		}),
		new THREE.MeshPhongMaterial({ // -x
			map: texture,
			transparent: true,
			side: THREE.DoubleSide
		}),
		new THREE.MeshPhongMaterial({ // +y
			transparent: true,
			visible: false
		}),
		new THREE.MeshPhongMaterial({ // -Y
			map: texture,
			transparent: true,
			side: THREE.DoubleSide
		}),
		new THREE.MeshPhongMaterial({ // +z
			map: texture,
			transparent: true,
			side: THREE.DoubleSide
		}),
		new THREE.MeshPhongMaterial({ // -Z
			map: texture,
			transparent: true,
			side: THREE.DoubleSide
		})
	];
	var mesh = new THREE.Mesh(new THREE.BoxGeometry(10, 12, 10) ,new THREE.MultiMaterial(materialArray));
	mesh.position.set(35,58.5,-40);
	mesh.rotation.y = Math.PI * 2 / 3;
	mesh.traverse (
		function (mesh) {
			if (mesh instanceof THREE.Mesh) {
				mesh.castShadow = true;
				mesh.receiveShadow = true;
			}
		}
	);
	scene.add(mesh);
	
	var onProgress = function(xhr){
		if(xhr.lengthComputable){
			var percenComplete = xhr.loaded / xhr.total * 100;
		}
	}
	var onError = function(xhr){};
	var mesh2 = new THREE.Object3D();
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('resources/hw4/');
	mtlLoader.load('519 Pen.mtl', function(materials) {
		materials.preload();
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);
		objLoader.setPath('resources/hw4/');
		objLoader.load('519 Pen.obj', function(object) {

			var obj =  unitize (object, 20);
			mesh2.add(obj);
			obj.rotation.x=Math.PI*0.12;
			mesh2.position.set(35,51,-40);
			mesh2.traverse (
				function (mesh2) {
					if (mesh2 instanceof THREE.Mesh) {
						mesh2.castShadow = true;
						mesh2.receiveShadow = true;
					}
				}
			);
			scene.add (mesh2);
		}, onProgress, onError);
	});
}