const modeBtn = document.querySelector("#mode-btn")
// Array.from() 사용가능
const colorOptions = [...document.querySelectorAll(".color-option")]
const lineWidth = document.querySelector("#line-width");
const colorPicker = document.querySelector("#color-picker");
const canvas = document.querySelector("canvas");
/*
canvas API 내부 context는 canvas element에서 2D 그림 렌더링을 위한 객체를 제공하는 인터페이스이다.
CanvasRenderingContext2D Docs : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
Interface 참고 : https://hyunseob.github.io/2016/10/17/typescript-interface/
*/
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth * 0.5;
canvas.height = window.innerWidth * 0.5;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;
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

const onMove = (e) => {
    if (isFilling) return;
    if (isPainting) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke()
        return;
    }
    ctx.beginPath()
    ctx.moveTo(e.offsetX, e.offsetY);
};

const startPainting = (e) => {
    isPainting = true
}

const cancelPainting = () => {
    isPainting = false;
}

const onLineWidthChange = (e) => {
    ctx.lineWidth = e.target.value
}

const onColorChange = (e) => {
    ctx.strokeStyle = e.target.value
    ctx.fillStyle = e.target.value
}

const onColorClick = (e) => {
    const colorValue = e.target.dataset.color 
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    colorPicker.value = colorValue
}

const onModeClick = () => {
    if(isFilling) {
        isFilling = false;
        modeBtn.innerText = "라인 모드";
    }
    else {
        isFilling = true;
        modeBtn.innerText = "채우기 모드";
    }
}

const onCanvasClick = () => {
    if (isFilling) {
        ctx.fillRect(1,1,canvas.width,canvas.height)
    }
}

// 마우스를 움직일때마다 선 그리는 함수 실행
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("click", onCanvasClick);

// canvas.addEventListener("mouseup", cancelPainting);
window.addEventListener("mouseup", cancelPainting);
lineWidth.addEventListener("change", onLineWidthChange);
colorPicker.addEventListener('change', onColorChange);
colorOptions.forEach((el) => {
    el.addEventListener("click", onColorClick);
})
modeBtn.addEventListener("click", onModeClick);