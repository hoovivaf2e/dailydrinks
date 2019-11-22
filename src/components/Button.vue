<template>
  <el-container>
    <el-button type="primary" icon="el-icon-plus" circle @click="handleCreate"></el-button>
    <EditDialog
      :dialogTitle="dialogTitle"
      :saveDialog="saveDialog"
      :cancelDialog="cancelDialog"
      :edit_dialog.sync="edit_dialog"
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
      dialogTitle: 'Create',
      tableData: []
    }
  },
  methods: {
    handleCreate () {
      console.log('create')
      this.edit_dialog = true
    },
    saveDialog (event) {
      console.log('event ' + JSON.stringify(event))
      this.tableData.unshift({ name: event.name, price: event.price, notes: event.notes })
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
