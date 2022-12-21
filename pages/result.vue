<template>
  <div class="container">
    <!-- 結果文字 -->
    <div class="result-text">
      <template v-if="computedResult > 50">
        <h1>m9(^Д^)</h1>
        <p class="shake">🤣</p>
      </template>
      <template v-else-if="computedResult > 10">
        <h1>残念！</h1>
        <p class="shake">🤣</p>
      </template>
      <template v-else-if="computedResult > 1">
        <h1>惜しい！！</h1>
        <p class="shake">😂</p>
      </template>
      <template v-else-if="computedResult === 1">
        <h1>もう少し！！！</h1>
        <p>😉</p>
      </template>
      <template v-else>
        <h1>おめでとう</h1>
      </template>
    </div>
    <!-- 結果値（絶対に0にしない）-->
    <p class="result-value">
      <span>ズレ:&nbsp;</span>
      <output>
        {{ computedResult }}%
      </output>
    </p>
    <NuxtLink class="challenge" :to="{name: 'index'}">
      もういっかい！
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: [
    () => {
      const result = useState('result')
      if (result.value == null) {
        return navigateTo({name: 'index'})
      }
    }
  ]
})

const result = useState<number>('result')
// 絶対に0にしない（成功させない）
const computedResult = computed(() => result.value === 0 ? 1 : result.value)
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  place-items: center;
  height: 90vh;
}

.result-text {
  text-align: center;

  h1 {
    font-size: 2em;
  }

  p {
    font-size: 4em;  
  }

  .shake {
    animation: hurueru .1s  infinite;
  }
}

.result-value {
  margin-top: auto;
  font-size: 0.9em;
  font-weight: bold;
  margin-bottom: 1em;
}

.challenge {
  font-size: 1em;
  background-color: #ff0081;
  color: azure;
  padding: 1em 2em;
  border-radius: 9999999px;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: auto;
}

$val: 0.1em;

@keyframes hurueru {
  0% {transform: translate(0px, 0px) rotateZ(0deg)}
  25% {transform: translate(#{$val}, #{$val}) rotateZ(1deg)}
  50% {transform: translate(0px, #{$val}) rotateZ(0deg)}
  75% {transform: translate(#{$val}, 0px) rotateZ(-1deg)}
  100% {transform: translate(0px, 0px) rotateZ(0deg)}
}
</style>