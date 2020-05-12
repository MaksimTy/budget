<template>
  <div class="total-value"> Balance:
    <template v-if="total > 0">
    <span class="positive-balance">{{ total }}</span>
    </template>
    <template v-else-if="total < 0">
      <span class="negative-balance">{{ total }}</span>
    </template>
    <template v-else>
      <span class="zero-balance">{{ total }}</span>
    </template>
    </div>
</template>

<script>
export default {
  name: 'TotalBalance',
  props:{
    total: {
      type: Number,
      default: 0,
    },
  },

}
</script>

<style scoped>
.total-value{
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}

.positive-balance{
  color: #67C23A;
}
.negative-balance{
  color: #F56C6C;
}
.zero-balance{
  color: #000;
}
</style>