<template>
  <div id="app">
      <el-row :gutter="5">
        <el-col :xs="24" :sm="20" :md="16" :lg="8" :xl="4">
         <Form @submitForm="onSubmitForm"/>
        </el-col>
        <el-col :xs="24" :sm="20" :md="16" :lg="16" :xl="20">
          <TotalBalance :total="TotalBalance"/>
          <BudgetList :fList="FilteredList"
            @onDeleteItem="onDeleteItem"
            @onListShow="onListShow"

          />
        </el-col>
      </el-row>
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList.vue";
import TotalBalance from "@/components/TotalBalance.vue";
import Form from "@/components/Form.vue"
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form,
    },
  data: () => ({
      fList: null
  }),
  computed:{
    ...mapGetters("transactions", ["TotalBalance", "transactionsList"]),

    FilteredList() {
      if(!this.fList){
        return this.transactionsList
        .filter(item => item.value !== 0)
        .reduce((acc, val) => {
        acc[val.id] = val;
         return acc;
        },{});
        }
        return this.fList;
    },
  },
  methods: {
    ...mapActions("transactions", ["addNewItem", "deleteItem"]),

    onDeleteItem(id) {
      this.deleteItem(id);
      this.onListShow();
    },

    onListShow(param) {
      if(param === 1){
        this.fList = this.transactionsList
        .filter(item => item.value > 0)
        .reduce((acc, val) => {
          acc[val.id] = val;
          return acc;
        },{});
      } else if(param === -1) {
        this.fList = this.transactionsList
        .filter(item => item.value < 0)
        .reduce((acc, val) => {
          acc[val.id] = val;
          return acc;
        },{});
      } else{
        this.fList = this.transactionsList
        .filter(item => item.value !== 0)
        .reduce((acc, val) => {
        acc[val.id] = val;
         return acc;
        },{});

      }
    },

    onSubmitForm(data) {
      const newObject = {
        ...data,
        id: String(new Date().valueOf())
        };
      this.addNewItem(newObject);
      this.onListShow();
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

.container{
  width: 100%;
}


</style>
