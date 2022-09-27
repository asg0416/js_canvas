const canvas = document.querySelector("canvas");
/*
canvas API 내부 context는 canvas element에서 2D 그림 렌더링을 위한 객체를 제공하는 인터페이스이다.
CanvasRenderingContext2D Docs : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
Interface 참고 : https://hyunseob.github.io/2016/10/17/typescript-interface/
*/
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

const colors = [
    "#eccc68",
    "#ff7f50",
    "#ff6b81",
    "#a4b0be",
    "#57606f",
    "#ffa502",
    "#ff6348",
    "#ff4757",
    "#747d8c",
    "#7bed9f",
    "#70a1ff",
    "#2f3542",
    "#5352ed",
    "#2ed573",
    "#1e90ff",
];

ctx.lineWidth = 2;
let isPainting = false;

const onMove = (e) => {
    if (isPainting) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke()
        return;
    }
    ctx.moveTo(e.offsetX, e.offsetY);
};

const onMouseDown = (e) => {
    isPainting = true
}

const cancelPainting = () => {
    isPainting = false;
}
// 마우스를 움직일때마다 선 그리는 함수 실행
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
// canvas.addEventListener("mouseup", cancelPainting);
window.addEventListener("mouseup", cancelPainting);
