import Vue from 'vue'
import App from './App.vue'
import 'down-ui/font/iconfont.css'
import 'down-ui/theme-chalk/index.css'

import DownUI from 'down-ui/vue2'
// Vue.use(DownUI)

import {
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Select,
  Option,
  Modal,
  Table,
  Page,
  Form,
  FormItem
} from 'view-design'
import 'view-design/dist/styles/iview.css';
const app = new Vue({
  render: function (h) { return h(App) },
})

// ant 默认注册配置
// DownUI.register(Vue, [Checkbox, Input, Button, Select, Modal, CheckboxGroup])
DownUI.register(Vue, {
  DModal: {
    name: 'DModal',
    component: Modal,
    props: {
      modelValue: 'value',
      closable: 'closable',
      maskClosable: 'mask-closable',
      width: 'width',
    },
    events: {
      onCancel: 'on-cancel',
      onOk: 'on-ok',
    },
  },
  DButton: {
    name: 'DButton',
    component: Button,
    props: {
      type: 'type',
      disabled: 'disabled',
    }
  },
  DCheckbox: {
    name: 'DCheckbox',
    component: Checkbox,
    props: {
      modelValue: 'value',
      indeterminate: 'indeterminate',
      disabled: 'disabled',
    },
    events: {
      onChange: 'on-change',
    },
  },
  DInput: {
    name: 'DInput',
    component: Input,
    props: {
      value: 'value',
    },
    events: {
      onChange: 'on-change',
      onPressEnter: 'on-enter',
    },
  },
  DTable: {
    name: 'DTable',
    component: Table,
    props: {
      dataSource: 'data',
      columns: 'columns',
    },
  },
  DPagination: {
    name: 'DPagination',
    component: Page,
    props: {
      current: 'current',
      pageSize: 'page-size',
      total: 'total',
      'show-size-changer': 'show-sizer',
      // 'show-quick-jumper': 'show-quick-jumper',
    },
    events: {
      onChange: 'on-change',
    },
  },
  DForm: {
    name: 'DForm',
    component: Form,
    props: {
      model: 'model',
      rules: 'rules',
    },
  },
  DFormItem: {
    name: 'DFormItem',
    component: FormItem,
    props: {
      name: 'prop',
      label: 'label',
    },
  },
  DTextarea: {
    name: 'DInput',
    component: Input,
    props: {
      value: 'value',
      rows: 'rows',
    },
    events: {
      change: 'change',
    },
  },
  DSelect: {
    name: 'DSelect',
    component: Select,
    props: {
      modelValue: 'value',
      multiple: 'multiple',
      clearable: 'clearable',
    },
    events: {
      onChange: 'change',
    },
  },
  DSelectOption: {
    name: 'DSelectOption',
    component: Option,
    props: {
      value: 'value',
    },
  },
})
app.$mount('#app')
