<template>
  <div class="list-item">
      <span class="budget-comment">{{item.comment}}</span>
      <span class="budget-value">{{getValue}}</span>
      <el-button
      type="danger"
      icon="el-icon-delete"
      circle size="mini"
      @click="dialogVisible = true">
      </el-button>
        <el-dialog
          class="dialog-question"
          title="Are you sure?"
          :visible.sync="dialogVisible"
          width="15%"
          :before-close="handleClose"
          :show-close="false"
          :center="true">
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="danger" @click="onDeleteItem(item.id)">Delete</el-button>
          </span>
        </el-dialog>
  </div>
</template>

<script>
import {numberFormat} from "../utils/formatter.js";

export default {
  name: 'BudgetListItem',
  data() {
      return {
        dialogVisible: false
      };
    },
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
          handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(() => {
            done();
          })
          .catch(() => {});
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

.dialog-question{
  font-weight: bold;
}

</style>