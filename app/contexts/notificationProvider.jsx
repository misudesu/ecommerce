'use client'
import { notification } from 'antd';
import React, { createContext, useContext, useState } from 'react';
export const NotificationContext = createContext();

export  const NotificationProvider = ({ children }) => {
 
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type,message,description) => {
    api[type]({
      message: message,
      description:description,
    });
  };

  return (
    <NotificationContext.Provider value={{ contextHolder, openNotificationWithIcon }}>
      {children}
    </NotificationContext.Provider>
  );
};