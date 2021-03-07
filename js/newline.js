import './three.js'
class renderLines {
	constructor(pointsData) {
		
	}
	renderLine() {
		var canvas = document.createElement("canvas");
		let context = canvas.getContext("2d");
		var texture = new THREE.CanvasTexture(canvas);
		var geometry = new THREE.Geometry();
		var lineMaterial = new THREE.LineBasicMaterial({
			color: '#ff0000'
		});
		texture.verticesNeedUpdate = true;
		geometry.vertices = this.pointsData;
		var line = new THREE.Line(geometry, lineMaterial);
		return line;
	}
	
}
export default {
	// 导出内容
	renderLines
} 

