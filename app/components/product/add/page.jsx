'use client'
import React, { useContext, useEffect, useState } from 'react';
import Button from '../../shared/Buttons/button';
import { insert } from '@/app/store/slice/product';
import { useDispatch, useSelector } from 'react-redux';

import {  NotificationDrawerContext } from '@/app/contexts/notification_and_Drawer_Provider';
import Prodactform from '../../shared/Forms/prodact_from';
import Drawers from '../../shared/Drawer/drawer';

export default function AddProduct({ opens,onClose }) {
    const {message,product,messageType} =useSelector((state)=>state.product)
    const {openNotificationWithIcon,contextHolder}=useContext(NotificationDrawerContext);
    const dispatch=useDispatch()
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    image: '',
    price: '',
    title: ''
  });

  const [imagePreview, setImagePreview] = useState(null);

    const style = "mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
    const handleImageChange = (e) => {
        const file = e.target.files[0];
     
        setFormData({ ...formData, image: file });
        setImagePreview(URL.createObjectURL(file)); 
      };
      const handleSubmit = (e) => {
        e.preventDefault();
            dispatch(insert(formData))
      };
      useEffect(()=>{
       
    setFormData({
        category: '',
        description: '',
        image: '',
        price: '',
        title: ''
      })
      if(messageType==='inserted'){
        message&&openNotificationWithIcon('success','updated',message)
      }
      },[message])
  return (<>
  {contextHolder}
  <Drawers onClose={onClose}
open={opens} title={`Update Product`}>
<Prodactform 
formData={[]} 
setFormData={setFormData} 
imagePreview={imagePreview} 
setImagePreview={setImagePreview}
handleImageChange={handleImageChange} 
handleSubmit={handleSubmit} 
handlingUpdate={(e)=>setFormData({ ...formData, [e.target.name]: e.target.value })}
>
    <Button
      text='Add'
      Type="submit"
      style={style}
    />
</Prodactform>
</Drawers>
  </>
    
  );
}
