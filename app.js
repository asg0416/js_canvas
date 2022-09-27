const canvas = document.querySelector('canvas');
/*
canvas API 내부 context는 canvas element에서 2D 그림 렌더링을 위한 객체를 제공하는 인터페이스이다.
CanvasRenderingContext2D Docs : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
Interface 참고 : https://hyunseob.github.io/2016/10/17/typescript-interface/
*/ 
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 50, 200)
ctx.fillRect(400, 200, 50, 200)
ctx.fillRect(300, 300, 50, 100)
ctx.fillRect(200, 200, 200, 20)

ctx.moveTo(200, 200)
ctx.lineTo(325, 100)
ctx.lineTo(450, 200)
ctx.fill()