<template>
  <el-container>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="120">
      </el-table-column>
      <el-table-column
        label="Price"
        width="120">
        <template slot-scope="scope">{{ scope.row.price }}</template>
      </el-table-column>
      <el-table-column
        prop="notes"
        label="Notes"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button icon="el-icon-edit" @click="handleEdit(scope.$index)"></el-button>
          <el-button icon="el-icon-delete" @click="handleDelete(scope.$index)" type="danger"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <EditDialog
      :dialogTitle="dialogTitle"
      :inputData="inputData"
      :saveDialog="saveDialog"
      :cancelDialog="cancelDialog"
      :edit_dialog="edit_dialog"
    />
  </el-container>
</template>

<script>
import EditDialog from '@/components/EditDialog'

export default {
  components: {
    EditDialog
  },
  data () {
    return {
      edit_dialog: false,
      dialogTitle: 'Edit',
      tableData: [],
      multipleSelection: [],
      inputData: {
        name: '',
        price: '',
        notes: ''
      },
      inputIndex: 0
    }
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleEdit (index) {
      console.log('index ' + index)
      this.inputData = this.tableData[index]
      this.inputIndex = index
      this.edit_dialog = true
    },
    handleDelete (index) {
      this.tableData.splice(index, 1)
    },
    saveDialog (event) {
      this.tableData.splice(this.inputIndex, 1, { name: event.name, price: event.price, notes: event.notes })
      this.$store.commit('updateData', this.tableData)
      this.edit_dialog = false
    },
    cancelDialog () {
      this.edit_dialog = false
    }
  },
  created () {
    this.tableData = this.$store.state.tableData
  }
}
</script>
