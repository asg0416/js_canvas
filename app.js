const canvas = document.querySelector('canvas');
/*
canvas API 내부 context는 canvas element에서 2D 그림 렌더링을 위한 객체를 제공하는 인터페이스이다.
CanvasRenderingContext2D Docs : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
Interface 참고 : https://hyunseob.github.io/2016/10/17/typescript-interface/
*/ 
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(210, 200, 15, 100)
ctx.fillRect(350, 200, 15, 100)
ctx.fillRect(260, 200, 60, 200)

/*
참고 : https://www.w3schools.com/tags/canvas_arc.asp
원 angle 
 0  * PI : 우측
0.5 * PI : 하단
 1  * PI : 좌측
1.5 * PI : 상단
 2  * PI : 한 바퀴를 다 돈 이후의 우측

x: 원 중심 x 좌표
y: 원 중심 y 좌표
r: 원 반지름
start angle: 원 테두리의 시작점
end angle: 원 테두리의 종점
*/
ctx.arc(287.5, 130, 50, 0, 2 * Math.PI);
ctx.stroke()
ctx.fillStyle = 'yellow'
ctx.fill()

ctx.beginPath();
ctx.arc(250, 130, 5, Math.PI, 2 * Math.PI);
ctx.arc(290, 130, 5, Math.PI, 2 * Math.PI);
ctx.fillStyle = 'gray'
ctx.fill()
