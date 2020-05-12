<template>
  <div class="budget-list-wrap">
    <el-card :header="header">
      <template v-if="isEmpty">
    <div class="list-item" v-for="(item, prop) in list" :key="prop">
      <span class="budget-comment">{{item.comment}}</span>
      <span class="budget-value">{{item.value}}</span>
      <el-button
      type="danger"
      icon="el-icon-delete"
      circle size="mini"
      @click="onDeleteItem(item.id)">
      </el-button>
    </div>
    </template>
    <el-alert v-else
      :title="emptyTitle"
      type="warning"
      effect="dark"
      :closable="false"/>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "BudgetList",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: "Budget List",
    emptyTitle: 'Empty list',
  }),
  computed: {
    isEmpty () {
      return Boolean(Object.keys(this.list).length);
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$emit('onDeleteItem', id);
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}

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
