function buildTable(){
		var mesh = new THREE.Object3D();
		
		THREE.ImageUtils.crossOrigin = '';
		texture = THREE.ImageUtils.loadTexture('resources/hw4/wood.jpg');
		texture.repeat.set(1, 1);
		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;
		texture.minFilter = THREE.LinearFilter;
		var mesh1 = new THREE.Mesh(new THREE.BoxGeometry( 90, 2, 60),new THREE.MeshPhongMaterial({map: texture, color: 0xaaaaaa}));
		mesh1.position.y=51;
		mesh.add(mesh1);
		
		var mesh2 = new THREE.Mesh(new THREE.BoxGeometry( 2, 2, 60),new THREE.MeshPhongMaterial({map: texture, color: 0xbbbbbb}));
		var mesh3 = mesh2.clone();
		mesh2.position.set(40.5,49,0);
		mesh3.position.set(-40.5,49,0);
		mesh.add(mesh2);
		mesh.add(mesh3);
		
		var mesh4 = new THREE.Mesh(new THREE.BoxGeometry( 2, 48, 2),new THREE.MeshPhongMaterial({map: texture, color: 0xdddddd}));
		var mesh5 = mesh4.clone();
		var mesh6 = mesh4.clone();
		var mesh7 = mesh4.clone();
		mesh4.position.set(40.5,24,28);
		mesh5.position.set(40.5,24,-28);
		mesh6.position.set(-40.5,24,28);
		mesh7.position.set(-40.5,24,-28);
		mesh.add(mesh4);
		mesh.add(mesh5);
		mesh.add(mesh6);
		mesh.add(mesh7);
		
		var mesh8 = new THREE.Mesh(new THREE.BoxGeometry( 2, 2, 54),new THREE.MeshPhongMaterial({map: texture, color: 0xdddddd}));
		var mesh9 = mesh8.clone();
		var mesh10 = mesh8.clone();
		var mesh11 = mesh8.clone();
		mesh8.position.set(40.5,39,0);
		mesh9.position.set(-40.5,39,0);
		mesh10.position.set(40.5,9,0);
		mesh11.position.set(-40.5,9,0);
		mesh.add(mesh8);
		mesh.add(mesh9);
		mesh.add(mesh10);
		mesh.add(mesh11);
		
		var mesh12 = new THREE.Mesh(new THREE.BoxGeometry( 79, 2, 2),new THREE.MeshPhongMaterial({map: texture, color: 0xdddddd}));
		var mesh13 = mesh12.clone();
		var mesh14 = mesh12.clone();
		mesh12.position.set(0,39,-28);
		mesh13.position.set(0,12,-28);
		mesh14.position.set(0,39,28);
		mesh.add(mesh12);
		mesh.add(mesh13);
		mesh.add(mesh14);
		
		var mesh15 = new THREE.Mesh(new THREE.BoxGeometry( 79, 10, 1),new THREE.MeshPhongMaterial({map: texture, color: 0xbbbbbb}));
		mesh15.position.set(0,45,-28);
		mesh.add(mesh15);
		
		var mesh16 = new THREE.Mesh(new THREE.BoxGeometry( 79, 1, 54),new THREE.MeshPhongMaterial({map: texture, color: 0xbbbbbb}));
		mesh16.position.set(0,39,0);
		mesh.add(mesh16);
		
		texture = THREE.ImageUtils.loadTexture('resources/hw4/ora.jpg');
		var mesh17 = new THREE.Mesh(new THREE.CylinderBufferGeometry( 0.5, 0.5, 4, 32 ),new THREE.MeshPhongMaterial({map: texture}));
		var mesh18 = mesh17.clone();
		var mesh19 = mesh17.clone();
		var mesh20 = mesh17.clone();
		var mesh21 = mesh17.clone();
		var mesh22 = mesh17.clone();
		mesh17.position.set(40.5,42,0);
		mesh18.position.set(40.5,42,-13);
		mesh19.position.set(40.5,42,13);
		mesh20.position.set(-40.5,42,0);
		mesh21.position.set(-40.5,42,-13);
		mesh22.position.set(-40.5,42,13);
		mesh.add(mesh17);
		mesh.add(mesh18);
		mesh.add(mesh19);
		mesh.add(mesh20);
		mesh.add(mesh21);
		mesh.add(mesh22);
		
		mesh.position.z=-20;
		mesh.traverse (
			function (mesh) {
				if (mesh instanceof THREE.Mesh) {
					mesh.castShadow = true;
					mesh.receiveShadow = true;
				}
			}
		);
		scene.add(mesh);
	}