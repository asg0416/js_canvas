const canvas = document.querySelector('canvas');
/*
canvas API 내부 context는 canvas element에서 2D 그림 렌더링을 위한 객체를 제공하는 인터페이스이다.
CanvasRenderingContext2D Docs : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
Interface 참고 : https://hyunseob.github.io/2016/10/17/typescript-interface/
*/ 
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2
ctx.moveTo(0,0) // 시작 지점 설정

const onclick = (e) => {
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
}
// 마우스를 움직일때마다 선 그리는 함수 실행
canvas.addEventListener('mousemove', onclick)