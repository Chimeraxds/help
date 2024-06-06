<template>
  <div>My component</div>
</template>

<script setup>
const props = defineProps({
testik:{
 type: Object,
}
})
console.log(props.testik)
</script>
