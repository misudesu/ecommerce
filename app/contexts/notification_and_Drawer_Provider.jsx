'use client'
import { notification } from 'antd';
import React, { createContext, useState } from 'react';
export const NotificationDrawerContext = createContext();

export  const Drawer_and_NotificationProvider = ({ children }) => {
 
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type,message,description) => {
    api[type]({
      message: message,
      description:description,
    });
  };
  const [open, setOpen] = useState(false);
      const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };

  return (
    <NotificationDrawerContext.Provider value={{ contextHolder, openNotificationWithIcon ,showDrawer,open,setOpen,onClose}}>
      {children}
    </NotificationDrawerContext.Provider>
  );
};