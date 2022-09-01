<template>
  <div>
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="4" :sm="12">
            <a-form-item label="任务名称">
              <a-input v-model="queryParam.name" placeholder=""/>
            </a-form-item>
          </a-col>
          <a-col :md="4" :sm="12">
            <a-form-item label="使用状态">
              <a-select v-model="queryParam.status" placeholder="请选择" default-value="0">
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="10">运行中</a-select-option>
                <a-select-option value="20">停止</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="2" :sm="6">
            <span class="table-page-search-submitButtons">
              <a-button type="primary" @click="taskList">查询</a-button>
              <a-button style="margin-left: 8px" @click="() => queryParam = {}">重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TaskLogDetail',
  components: {
  },
  data () {
    return {
      // 查询参数
      queryParam: {},
      // 表头
      columns: [
        {
          title: '任务ID',
          dataIndex: 'id',
          align: 'center',
          key: 'id'
        },
        {
          title: '任务名称',
          dataIndex: 'name',
          align: 'center'
        },
        {
          title: '表达式',
          dataIndex: 'spec',
          align: 'center'
        },
        {
          title: '状态',
          dataIndex: 'status',
          align: 'center',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: '更新时间',
          dataIndex: 'updated',
          align: 'center'
        },
        {
          title: '创建时间',
          dataIndex: 'created',
          align: 'center'
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: 'center',
          width: '150px',
          scopedSlots: { customRender: 'action' }
        }
      ],
      items: [],
      selectedRowKeys: [],
      selectedRows: [],
      loading: false,
      pagination: {
        current: 1,
        total: 0,
        pageSize: 0
      }
    }
  },
  created () {
    this.taskList()
  },
  methods: {}
}
</script>
