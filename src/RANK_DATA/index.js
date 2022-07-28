import UIFramworks from './UIFramworks';
import MetaFramworks from './MetaFramworks';
export default [
  {
    title: 'Framworks',
    menu: [
      {
        cn: '用户界面框架',
        en: 'UI Framworks',
        ...UIFramworks,
      },
      {
        cn: '元框架',
        en: 'Meta Framworks',
        ...MetaFramworks,
      },
      {
        cn: '客户端框架',
        en: 'Mobile & Desktop',
      },
    ],
  },
  {
    title: 'Tools',
    menu: [
      {
        cn: '构建',
        en: 'Build Tools',
      },
      {
        cn: '状态管理',
        en: 'State Management',
      },
      {
        cn: 'CSS 混合脚本',
        en: 'CSS In JS',
      },
      {
        cn: 'CSS 预处理',
        en: 'CSS Processor',
      },
      {
        cn: '测试',
        en: 'Testing Tools',
      },
      {
        cn: '编译器',
        en: 'Compiler',
      },
    ],
  },
  {
    title: 'Materials',
    menu: [
      {
        cn: '组件',
        en: 'Component',
      },
      {
        cn: '图表',
        en: 'Charting',
      },
      {
        cn: '拖拽',
        en: 'Drag and Drop',
      },
      {
        cn: '富文本编辑器',
        en: 'Rich Text Editor',
      },
      {
        cn: '表单',
        en: 'Form',
      },
    ],
  },
  {
    title: 'Logic',
    menu: [
      {
        cn: '日期',
        en: 'Date & Time',
      },
      {
        cn: '数学',
        en: 'Math',
      },
      {
        cn: '钩子 & 函数',
        en: 'Hook & Function',
      },
      {
        cn: '请求',
        en: 'HTTP Client & Ajax',
      },
    ],
  },
  {
    title: 'Resource',
    menu: [
      {
        cn: '学习资源',
        en: 'Learning Resource',
      },
    ],
  },
];
