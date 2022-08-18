<template>
  <div class="p-4">
    <BasicTable @register="registerTable" @edit-end="handleEditEnd">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'is_enable'">
          <Switch
            @click="handleChangeStatus(record)"
            checked-children="开"
            un-checked-children="关"
            v-model:checked="record.is_enable"
          />
        </template>
        <template v-if="column.key === 'action'">
          <a-button @click="handleOpen" color="success"> 手工执行 </a-button>
          <a-button type="primary" class="ml-2"> 编辑 </a-button>
          <a-button color="warning" class="ml-2"> 日志 </a-button>
          <a-button color="error" class="ml-2"> 删除 </a-button>
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable, useTable, BasicColumn } from '/@/components/Table';
  import { disable, enable, getListApi } from '/@/api/task';
  import { Switch } from 'ant-design-vue';
  const columns: BasicColumn[] = [
    {
      title: '任务ID',
      dataIndex: 'id',
      width: 80,
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
      dataIndex: 'is_enable',
      width: 100,
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
    components: { BasicTable, Switch },
    setup() {
      const [registerTable] = useTable({
        title: '任务列表',
        api: getListApi,
        columns: columns,
        bordered: true,
        actionColumn: {
          title: '操作',
          width: 360,
          dataIndex: 'action',
        },
      });

      const checked = ref<boolean>(true);

      function handleDelete(record: Recordable) {
        console.log('点击了删除', record);
      }
      function handleOpen(record: Recordable) {
        console.log('点击了启用', record);
      }

      function handleEditEnd({ record, index, key, value }: Recordable) {
        console.log(record, index, key, value);
        return false;
      }

      function handleChangeStatus(record: Recordable) {
        const changeStatusParams = {
          id: record.id,
        };
        try {
          if (record.is_enable) {
            enable(changeStatusParams);
          } else {
            disable(changeStatusParams);
          }
        } catch (error) {
          return Promise.reject(error);
        }
      }

      return {
        registerTable,
        handleDelete,
        handleOpen,
        checked,
        handleEditEnd,
        handleChangeStatus,
      };
    },
  });
</script>
