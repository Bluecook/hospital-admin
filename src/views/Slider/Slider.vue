<template>
    <div class="slide-puzzle m-auto mt-5 relative">
        <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight" class="mb-4"></canvas>
        <canvas ref="sliderImg" :width="sliderWidth" :style="{ top: 0 + 'px', left: barLeft + 'px' }" class="absolute"
            :height="canvasHeight"></canvas>
        <!-- 刷新验证图 -->
        <div class="absolute top-2 right-2 cursor-pointer z-10" @click="init">
            <sync-outlined style="color: aliceblue;font-size: 24px;" />
        </div>
    </div>
    <div class="w-[480px] h-9 mt-2 bg-slate-600 m-auto relative">
        <span class="absolute select-none text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">向右滑动完成验证</span>
        <div class="absolute top-0 left-0 bg-slate-600 h-full" :style="{ width: barLeft + 'px' }"></div>
        <div class="h-full w-[60px] bg-gray-400 cursor-pointer absolute z-10" :style="{ left: barLeft + 'px' }"
            @mousedown="onMouseDown">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, defineExpose, Ref, inject } from 'vue'
import { getImageUrl } from '@/util/getfile'
import { message } from 'ant-design-vue'

const handleOk = inject('isOk') as () => void
const canvasWidth = ref<number>(480)//背景图宽度
const canvasHeight = ref<number>(300)//背景图高度
// 背景图
const canvas = ref<HTMLCanvasElement | null>()
// 滑块拼图
const sliderImg = ref<HTMLCanvasElement | null>()
// 随机生成的验证图
let verificationDiagram = ref<string>('')
const bgScale = ref<number>(2).value//背景图和实际图的缩放比例
const barLeft = ref(0)
let isDragging = false
let startLeft = 0
// 滑块拼图的宽度(为一正方形)
let sliderWidth = ref<number>(56)

let puzzleScale = ref<number>(1).value// 拼图块的大小缩放比例
let pinX = ref<number>(86) // 拼图的起始X
let pinY = ref<number>(99) // 拼图的起始Y
const range: number = 5  // 允许的偏差值
// 工具 - 范围随机数
const getRandom = (min: number, max: number) => {
    return Math.ceil(Math.random() * (max - min) + min);
}

onMounted(() => {
    init()
})

onUnmounted(() => {
    // 清除事件监听
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
})

function drawPuzzle(canvas: HTMLCanvasElement) {
    // 绘制拼图的代码
    const ctx = canvas.getContext('2d')
    if (!ctx) {
        return
    }

    // 绘制不完整背景图片
    const bgImg = new Image()
    bgImg.src = verificationDiagram.value
    bgImg.onload = () => {
        ctx.drawImage(bgImg, 0, 0, canvasWidth.value, canvasHeight.value)
        // 绘制缺块
        drawingPieces(ctx)
        ctx.fill()
    }

}
// 绘制拼图块
function drawingPieces(ctx: {
    beginPath: () => void;
    moveTo: (arg1: number, arg2: number) => void;
    lineTo: (arg1: number, arg2: number) => void;
    arcTo: (arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void;
}, startX?: number) {
    let moveL = Math.ceil(16 * puzzleScale)
    let X = startX !== undefined ? startX : pinX.value
    ctx.beginPath()
    ctx.moveTo(X, pinY.value)
    ctx.lineTo(X + moveL, pinY.value)
    ctx.arcTo(
        X + moveL,
        pinY.value - moveL / 2,
        X + moveL + moveL / 2,
        pinY.value - moveL / 2,
        moveL / 2
    );

    ctx.arcTo(
        X + moveL + moveL,
        pinY.value - moveL / 2,
        X + moveL + moveL,
        pinY.value,
        moveL / 2
    );
    ctx.lineTo(X + moveL + moveL + moveL, pinY.value);
    ctx.lineTo(X + moveL + moveL + moveL, pinY.value + moveL);
    ctx.arcTo(
        X + moveL + moveL + moveL + moveL / 2,
        pinY.value + moveL,
        X + moveL + moveL + moveL + moveL / 2,
        pinY.value + moveL + moveL / 2,
        moveL / 2
    );
    ctx.arcTo(
        X + moveL + moveL + moveL + moveL / 2,
        pinY.value + moveL + moveL,
        X + moveL + moveL + moveL,
        pinY.value + moveL + moveL,
        moveL / 2
    );
    ctx.lineTo(
        X + moveL + moveL + moveL,
        pinY.value + moveL + moveL + moveL
    );
    ctx.lineTo(X, pinY.value + moveL + moveL + moveL);
    ctx.lineTo(X, pinY.value + moveL + moveL);

    ctx.arcTo(
        X + moveL / 2,
        pinY.value + moveL + moveL,
        X + moveL / 2,
        pinY.value + moveL + moveL / 2,
        moveL / 2
    );
    ctx.arcTo(
        X + moveL / 2,
        pinY.value + moveL,
        X,
        pinY.value + moveL,
        moveL / 2
    );
    ctx.lineTo(X, pinY.value);
}
function onMouseDown(event: MouseEvent) {
    isDragging = true
    startLeft = event.clientX
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
}

function onMouseMove(event: MouseEvent) {
    if (isDragging) {
        const diff = event.clientX - startLeft
        if (diff > 0 && diff < 420) {
            barLeft.value = diff
        }
    }
}


function onMouseUp(event: MouseEvent) {
    isDragging = false
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
    // 验证位置是否正确
    if (Math.abs(pinX.value - barLeft.value) < range) {
        message.success('验证通过')
        // 验证成功关闭弹窗
        setTimeout(() => {
            // 函数体
            handleOk()
        }, 600)
    } else {
        message.error("验证失败!")
        barLeft.value = 0
        // 验证失败重新生成验证图
        init()
    }
}

// 随机生成一种验证图
function imgRandom() {
    const imgsArr = [getImageUrl('xi'), getImageUrl('font'), getImageUrl('R-C')]
    return imgsArr[Math.floor(Math.random() * imgsArr.length)]
}

const init = () => {
    // 随机生成一个验证图片
    verificationDiagram.value = imgRandom()
    // 取一个随机坐标，作为拼图块的位置 
    pinX.value = getRandom(sliderWidth.value, canvasWidth.value - sliderWidth.value); // 留20的边距
    pinY.value = getRandom(20, canvasHeight.value - sliderWidth.value); // 主图高度 - 拼图块自身高度 - 20边距
    // 背景
    if (canvas.value) {
        drawPuzzle(canvas.value)
    }
    // 绘制移动的背景缺块
    if (sliderImg.value) {
        // 清空canvas原有的内容
        sliderImg.value.width = sliderWidth.value
        sliderImg.value.height = canvasHeight.value
        const ctx = sliderImg.value.getContext('2d')
        if (ctx) {
            const slider = new Image()
            slider.src = verificationDiagram.value
            slider.onload = () => {
                ctx.drawImage(slider, pinX.value * bgScale, (pinY.value - 16) * bgScale, sliderWidth.value * bgScale, canvasHeight.value * bgScale, 0, pinY.value - 16, sliderWidth.value, canvasHeight.value)
            }
            drawingPieces(ctx, 0)
            ctx.clip()
        }
    }
}


defineExpose({
    init,
    barLeft
})
</script>

<style scoped>
.slide-puzzle {
    position: relative;
    width: 480px;
    height: 300px;
    background-color: #d6d6d6;
}

.slide-bar {
    position: absolute;
    bottom: 70px;
    left: 0;
    width: 60px;
    height: 60px;
    background-color: #fff;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}
</style>
