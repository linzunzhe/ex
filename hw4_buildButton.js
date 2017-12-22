function buildButton(){
	var mesh = new THREE.Object3D();
	
	var mesh1 = new THREE.Mesh(new THREE.BoxGeometry(20, 1, 10), new THREE.MeshPhongMaterial({color: 0xdddddd}));
	mesh.add(mesh1);
	
	var mesh2 = new THREE.Mesh(new THREE.BoxGeometry(20, 1, 1), new THREE.MeshPhongMaterial({color: 0xdddddd}));
	var mesh3 = mesh2.clone();
	mesh2.position.set(0, 1, 4.5);
	mesh3.position.set(0, 1, -4.5);
	mesh.add(mesh2);
	mesh.add(mesh3);
	
	var mesh4 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 8), new THREE.MeshPhongMaterial({color: 0xdddddd}));
	var mesh5 = mesh4.clone();
	var mesh6 = mesh4.clone();
	mesh4.position.set(9.5, 1, 0);
	mesh5.position.set(0, 1, 0);
	mesh6.position.set(-9.5, 1, 0);
	mesh.add(mesh4);
	mesh.add(mesh5);
	mesh.add(mesh6);
	
	bt1 = new Button(new THREE.Color (0xffff00), 'yellow');
	bt2 = new Button(new THREE.Color (0x00ffff), 'cyan');
	bt1.obj.position.x=-4.75;
	bt2.obj.position.x=4.75;
	pickables.push(bt1.obj);
	pickables.push(bt2.obj);
	mesh.add(bt1.obj);
	mesh.add(bt2.obj);
	
	mesh.position.set(10, 52.5, -5);
	mesh.rotation.y = Math.PI * 7 / 10;
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