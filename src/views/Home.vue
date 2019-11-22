<template>
  <el-container>
    <el-col type="flex" :offset="5" :span="14">
      <Header/>
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
import Header from '@/components/Header'

export default {
  name: 'home',
  components: {
    Button,
    DataTable,
    Header
  }
}
</script>
