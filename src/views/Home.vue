<template>
  <el-container>
    <el-col type="flex" :offset="5" :span="14">
      <el-row class="flex-right">
        <Button/>
      </el-row>
      <el-row>
        <DataTable/>
      </el-row>
    </el-col>
  </el-container>
</template>

<script>
import Button from '@/components/Button'
import DataTable from '@/components/DataTable'

export default {
  name: 'home',
  components: {
    Button,
    DataTable
  }
}
</script>
