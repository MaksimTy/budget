<template>
  <div class="budget-list-wrap">
    <el-card>

      <div slot="header" class="clearfix">
        <span class="header">{{header}}</span>
        <span class="button-pane">
          <el-button class="button" type="success" @click="onListShow(1)">income</el-button>
          <el-button class="button" type="danger" @click="onListShow(-1)">outcome</el-button>
          <el-button class="button" type="primary" @click="onListShow()">all</el-button>
        </span>
      </div>


      <template v-if="isEmpty">
        <div v-for="(item, prop) in fList" :key="prop">
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
    fList: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: "Budget list",
    emptyTitle: 'Empty list',
  }),
  computed: {
    isEmpty () {
      return Boolean(Object.keys(this.fList).length);
    },
  },
   methods: {
    onDeleteItem(id) {
      this.$emit('onDeleteItem', id);
    },
    onListShow(param) {
      this.$emit('onListShow', param);
    },
  },
};
</script>

<style scoped>

.budget-list-wrap {
  margin: auto;
}

.button{
width: 80px;
padding: 10px;
border-radius: 20px;
}

.button-pane{
  float: right;
}

.clearfix{
  height: 35px;
  text-align: left;
}

.header{
  font-size: 26px;
  font-weight: bold;
}
</style>
