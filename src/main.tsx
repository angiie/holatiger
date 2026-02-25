import React from 'react'
import ReactDOM from 'react-dom/client'
import TestI18n from '@/pages/TestI18n'
import '@/i18n'

// 导入样式

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <TestI18n />
  </React.StrictMode>
)
