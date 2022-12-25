<template>
  <div class="container" @touchstart="goResult" @mousedown="goResult">
    <h1 class="title">タイミングよくタップ！</h1>
    <div id="move-circle" :style="{
      width: `${movePer}vh`,
      height: `${movePer}vh`
    }"></div>
    <div id="center-circle" :style="{
      width: `${goalPer}vh`,
      height: `${goalPer}vh`
    }"></div>
  </div>
</template>

<script lang="ts" setup>
const goalPer = 10;
const movePer = ref<number>(100 + goalPer);

let timerId: NodeJS.Timer;

const move = () => {
  if (movePer.value <= goalPer) {
    movePer.value = 100 + goalPer
  } else {
    movePer.value -= 2
  }
}


const result = useState<number>('result', () => 0)

const goResult = () => {
  result.value = Math.abs(movePer.value - goalPer)
  const router = useRouter()
  router.push({name: 'result'})
}

onMounted(() => {
  timerId = setInterval(() => {
    move()
  }, 50)
})

onBeforeUnmount(() => {
  if (timerId) {
    clearInterval(timerId)
  }
})
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 90vh;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
}

.title {
  position: absolute;
  top: 10vh;
  opacity: 0.7;
  font-size: 1.2em;
}

#move-circle {
  position: absolute;
  background-color: transparent;
  background-image: url('~/assets/images/heart1.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}

#center-circle {
  position: absolute;
  background-color: transparent;
  background-image: url('~/assets/images/heart2.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}
</style>