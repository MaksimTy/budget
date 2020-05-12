<template>
  <div class="budget-list-wrap">
    <el-card :header="header">
      <template v-if="isEmpty">
        <div v-for="(item, prop) in list" :key="prop">
          <BudgetListItem :item="item" @onDeleteItem="onDeleteItem"/>
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
import BudgetListItem from "./BudgetListItem.vue";

export default {
  name: "BudgetList",
  components: {
    BudgetListItem,
    },
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

</style>
