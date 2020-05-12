


<template>
  <div class="total-value"> Balance:
    <template v-if="total > 0">
    <span class="positive-balance">{{ getTotal }}</span>
    </template>
    <template v-else-if="total < 0">
      <span class="negative-balance">{{ getTotal }}</span>
    </template>
    <template v-else>
      <span class="zero-balance">{{ getTotal }}</span>
    </template>
    </div>
</template>

<script>
import {numberFormat} from "../utils/formatter";

export default {
  name: 'TotalBalance',
  props:{
    total: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    getTotal() {
      return numberFormat(this.total);
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