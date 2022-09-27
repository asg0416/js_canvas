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
ctx.rect(40, 50, 30, 30); // rect = 선을 그리는 역할
ctx.fill(); // fill = 채우는 역할

ctx.beginPath() // 경로를 새로 시작하여 이후 코드를 이전과 분리, 레이어분리 개념
ctx.rect(70, 80, 30, 30);
ctx.rect(100, 110, 30, 30);
ctx.fillStyle = 'red'; // 마지막 사각형만 빨간색
ctx.fill();

// 즉 canvas는 레이어와 같은 경로가 중요하며, 도형의 선을 그린 후 채워가는 순서