'use client'
import React, { useContext, useEffect } from 'react';
import Button from '../../shared/Buttons/button';
import { remove } from '@/app/store/slice/product';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import {  NotificationDrawerContext } from '@/app/contexts/notification_and_Drawer_Provider';
export default function Delete({id}) {
   
    const styledelete = "mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
    const {messageType,message,loading} =useSelector((state)=>state.product)
    const {openNotificationWithIcon}=useContext(NotificationDrawerContext);
    const dispatch=useDispatch()
    const  router=useRouter()
    const Delete=()=>{
        dispatch(remove(id))
      }

      useEffect(()=>{
       if(messageType==="Deleted"){
        message&&openNotificationWithIcon('success','updated',message)
       router.replace('/')
       }
   },[messageType])
  return (
    <Button
    text='Delete'
    Type="submit"
    style={styledelete}
  handleClick={Delete}
  />
    
  );
}
