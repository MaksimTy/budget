<template>
  <div id="app">
    <Form @submitForm="onSubmitForm"/>
    <TotalBalance :total="TotalBalance"/>
    <BudgetList :list="list" @onDeleteItem="onDeleteItem"/>
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList.vue";
import TotalBalance from "@/components/TotalBalance.vue";
import Form from "@/components/Form.vue"

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form,
    },
  data: () => ({
    list: {
       1:{
        type: 'INCOME',
        value: 100,
        comment: 'comments',
        id: 1,
      },
      2:{
        type: 'OUTCOME',
        value: -50,
        comment: 'comments',
        id: 2,
      },
    },
  }),
  computed:{
    TotalBalance() {
      return Object.values(this.list).reduce((acc, val) => {
        acc += val.value;
        return acc;
      }, 0);
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
    },
    onSubmitForm(data) {
      const newObject = {
        ...data,
        id: String(Math.random())
        };
      this.$set(this.list, newObject.id, newObject);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
