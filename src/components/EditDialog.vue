<template>
  <el-dialog :title="dialogTitle" :visible.sync="edit_dialog">
    <el-form :model="form">
      <el-form-item label="Name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Price" :label-width="formLabelWidth">
        <el-input v-model="form.price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Notes" :label-width="formLabelWidth">
        <el-input v-model="form.notes" type="textarea" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancelDialog">Cancel</el-button>
      <el-button type="primary" @click="saveDialog(form)">Save</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogTitle: String,
    inputData: Object,
    saveDialog: Function,
    cancelDialog: Function,
    edit_dialog: Boolean
  },
  data () {
    return {
      formLabelWidth: '120px',
      form: {
        name: '',
        price: '',
        notes: ''
      }
    }
  },
  watch: {
    inputData () {
      this.form = this.inputData
    }
  }
}
</script>
