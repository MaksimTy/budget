<template>
  <div class="list-item">
      <span class="budget-comment">{{item.comment}}</span>
      <span class="budget-value">{{getValue}}</span>
      <el-button
      type="danger"
      icon="el-icon-delete"
      circle size="mini"
      @click="onDeleteItem(item.id)">
      </el-button>
  </div>
</template>
<script>
import {numberFormat} from "../utils/formatter.js";
export default {
  name: 'BudgetListItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    getValue() {
      return numberFormat(this.item.value);
    }

  },
  methods: {
    onDeleteItem(id) {
      this.$emit('onDeleteItem', id);
    },
  },
}
</script>

<style scoped>

.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}

</style>