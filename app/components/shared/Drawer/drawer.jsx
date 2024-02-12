import { Drawer } from 'antd'
import React from 'react'

export default function Drawers({open,onClose,children,title}) {
  return (
    <Drawer title={title} onClose={onClose} open={open}>
        {children}
      </Drawer>
  )
}
