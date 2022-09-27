const canvas = document.querySelector('canvas');
/*
canvas API 내부 context는 canvas element에서 2D 그림 렌더링을 위한 객체를 제공하는 인터페이스이다.
CanvasRenderingContext2D Docs : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
Interface 참고 : https://hyunseob.github.io/2016/10/17/typescript-interface/
*/ 
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(250, 50, 100, 200)
ctx.rect(10, 20, 30, 30);
ctx.rect(40, 50, 30, 30);
ctx.fill();
ctx.rect(70, 80, 30, 30);
ctx.fillStyle = 'red'; // 
ctx.fill();
/*
fillRect 라인을 제외하고 모두 같은 경로의 같은 레이어를 공유하는 일부이므로
전체 사각형이 빨간색으로 변경됨
fillStyle이 같은 경로의 물체에 모두 영향을 끼침
*/