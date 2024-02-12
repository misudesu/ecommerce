'use client'
import React, { useContext, useEffect, useState } from 'react';
import Button from '../../shared/buttons/button';

import { useDispatch, useSelector } from 'react-redux';
import {  NotificationDrawerContext } from '@/app/contexts/notification_and_Drawer_Provider';
import Delete from '../delete/page';

import Drawers from '../../shared/drawers/drawer';
import Prodactform from '../../shared/forms/prodact_from';
import { update } from '@/app/store/slice/product';

function IteamUpdate({ id,products}) {

    const {messageType,message} =useSelector((state)=>state.product)
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
    const styleupdate = "mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
        setImagePreview(URL.createObjectURL(file)); 
      };
      const handleSubmit = (e) => {
        e.preventDefault();
            dispatch(update(formData,id))
       
      };
      const [open, setOpen] = useState(false);
    
      useEffect(()=>{
          setFormData({  category: products?.[0]?.category,
              description: products?.[0]?.description,
              image: products?.[0]?.image,
              price: products?.[0]?.price,
              title: products?.[0]?.title
            })

      },[open]) 
      useEffect(()=>{
        if(messageType==="updated"){
            message&&openNotificationWithIcon('success','updated',message)
         }
      },[messageType])    
     
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (<div>
  {contextHolder}
<Drawers onClose={onClose}
open={open} title={`Update Product ${products?.[0]?.title}`}>
<Prodactform 
formDatas={formData} 
setFormData={setFormData} 
imagePreview={imagePreview} 
setImagePreview={setImagePreview}
handleImageChange={handleImageChange} 
handleSubmit={handleSubmit} 
products={products?.[0]}
handlingUpdate={(e)=>setFormData({ ...formData, [e.target.name]: e.target.value })}
>
    <Button
      text='Update'
      Type="submit"
      style={styleupdate}
    handleClick={handleSubmit}
    />
</Prodactform>
</Drawers>
<div className='flex gap-4'>

<Button 
text='Update'
Type="submit"
style={styleupdate}
handleClick={showDrawer}>
  Update
  </Button>
<Delete id={id}/>
</div>
</div>
  );
}
export default IteamUpdate
