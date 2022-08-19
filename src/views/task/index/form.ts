import { FormSchema } from '/@/components/Form';
const colProps = {
  span: 10,
};

export const schemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: '任务名',
    colProps,
    componentProps: {
      placeholder: '给任务起个名字',
    },
    required: true,
  },
  {
    field: 'spec',
    component: 'Input',
    colProps,
    label: 'crontab表达式',
    helpMessage: 'crontab表达式',
    componentProps: {
      placeholder: '* * * * * *',
    },
    required: true,
  },
  {
    field: 'timeout',
    component: 'InputNumber',
    colProps,
    label: '任务超时时间',
    helpMessage: '任务超时时间',
    required: true,
    defaultValue: 10,
  },
  {
    field: 'retryTimes',
    component: 'InputNumber',
    colProps,
    label: '重试次数',
    helpMessage: '任务失败重试次数',
    required: true,
    defaultValue: 5,
  },
  {
    field: 'retryInterval',
    component: 'InputNumber',
    colProps,
    label: '任务重试间隔时间',
    helpMessage: '任务重试间隔时间',
    required: true,
    defaultValue: 5,
  },
  {
    field: 'status',
    component: 'RadioGroup',
    colProps,
    label: '任务状态',
    helpMessage: '状态',
    required: true,
    defaultValue: '10',
    componentProps: {
      options: [
        {
          label: '开启',
          value: '10',
        },
        {
          label: '关闭',
          value: '20',
        },
      ],
    },
  },
  {
    field: 'command',
    component: 'InputTextArea',
    colProps,
    componentProps: {
      placeholder: '请输入需要执行的shell脚本',
      rows: 4,
    },
    label: '执行命令',
    helpMessage: '执行的shell命令',
    required: true,
  },
];
