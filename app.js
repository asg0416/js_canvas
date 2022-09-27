const canvas = document.querySelector('canvas');
/*
canvas API 내부 context는 canvas element에서 2D 그림 렌더링을 위한 객체를 제공하는 인터페이스이다.
CanvasRenderingContext2D Docs : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
Interface 참고 : https://hyunseob.github.io/2016/10/17/typescript-interface/
*/ 
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

// canvas context의 그림을 그리기위한 시작은 항상 (0, 0) 좌표 기준이다.
ctx.moveTo(50, 50) // 그림을 그리기 위한 시작 좌표를 옮겨주는 함수
ctx.lineTo(150, 50) // 시작 좌표에서 목표 좌표까지 선을 생성하며, 단순 생성함수로 색이 표현되지는 않는 상태
// ctx.stroke() // 중간에 있을 필요 없음
ctx.lineTo(150, 150)
ctx.lineTo(50, 150)
ctx.lineTo(50, 50)
ctx.stroke() // 선을 실제로 그려주는 함수

/* 
lineTo 함수로 이미 선은 생성된 상태이며, 마지막에 stroke 함수를 실행시켜 색을 입혀주는 것
stroke 함수를 중간 중간 넣으면 해당 상태까지의 선이 중복으로 색이 입혀짐

즉, 
moveTo :  선을 긋지 않고 좌표이동
lineTo : 선을 그으며 좌표 이동
stroke : 선에 색 넣기
fill : 면에 색 채우기
*/