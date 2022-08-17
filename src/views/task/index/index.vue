<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'id'"> ID: {{ record.id }} </template>
        <template v-else-if="column.key === 'status'">
          <Tag color="green">
            {{ record.status }}
          </Tag>
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn } from '/@/components/Table';
  import { getListApi } from '/@/api/task';
  import { Tag } from 'ant-design-vue';
  const columns: BasicColumn[] = [
    {
      title: '任务ID',
      dataIndex: 'id',
      fixed: 'left',
    },
    {
      title: '任务名称',
      dataIndex: 'name',
    },
    {
      title: '表达式',
      dataIndex: 'spec',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '备注',
      dataIndex: 'remark',
    },
    {
      title: '创建时间',
      dataIndex: 'created',
    },
    {
      title: '更新时间',
      dataIndex: 'updated',
    },
  ];
  export default defineComponent({
    components: { BasicTable, Tag },
    setup() {
      const [registerTable] = useTable({
        title: '任务列表',
        api: getListApi,
        columns: columns,
        bordered: true,
      });

      return {
        registerTable,
      };
    },
  });
</script>
