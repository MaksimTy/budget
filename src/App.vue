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
    fList: null,
  }),
  computed:{
    TotalBalance() {
      return Object.values(this.list).reduce((acc, val) => {
        acc += val.value;
        return acc;
      }, 0);
    },
    FilteredList() {
      if(!this.fList){
        return this.list
        }
        return this.fList;
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
      this.onListShow();

    },
    onListShow(param) {

      if(param === 1){
        this.fList = Object.values(this.list)
        .filter(item => item.value > 0)
        .reduce((acc, val) => {
          acc[val.id] = val;
          return acc;
        },{});
      } else if(param === -1) {
       this.fList = Object.values(this.list)
        .filter(item => item.value < 0)
        .reduce((acc, val) => {
          acc[val.id] = val;
          return acc;
        },{});
      } else{
        this.fList = this.list;
      }

    },

    onSubmitForm(data) {
      const newObject = {
        ...data,
        id: String(Math.random())
        };
      this.$set(this.list, newObject.id, newObject);
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
