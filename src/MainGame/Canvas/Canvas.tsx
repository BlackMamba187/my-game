import React, { useEffect, useRef } from "react";

const Canvas = ({ draw, height, width }: any) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas: any = canvasRef.current;
		const context = canvas.getContext("2d");
		var then = Date.now();
		var now;
		var fps = 60;
		
		const render = () => {
			now = Date.now();

			var diff = now - then;
			if (diff > 1000 / fps) {
				draw(context);
				then = now;
			}
			window.requestAnimationFrame(render);
		};
		render();
	}, [draw]);

	return <canvas ref={canvasRef} height={height} width={width} />;
};

export default Canvas;
