'use client'
import React, { useContext, useEffect, useState } from 'react';
import Input from '../../shared/Forms/input_form';
import Button from '../../shared/Buttons/button';
import { remove, update } from '@/app/store/slice/product';
import { useDispatch, useSelector } from 'react-redux';
import Prodactform from '../prodactForm/page';
import { NotificationContext } from '@/app/contexts/notificationProvider';
import Delete from '../delete/page';

export default function Update({ products ,id}) {
    const {messageType,message} =useSelector((state)=>state.product)
    const {openNotificationWithIcon,contextHolder}=useContext(NotificationContext);
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
        // You may want to handle file validation here
        setFormData({ ...formData, image: file });
        setImagePreview(URL.createObjectURL(file)); // Create a URL for the selected image
      };
      const handleSubmit = (e) => {
        e.preventDefault();
            dispatch(update(formData,id))
       
      };
     
      useEffect(()=>{
        message&&openNotificationWithIcon('success','updated',message)
    setFormData({
        category: '',
        description: '',
        image: '',
        price: '',
        title: ''
      })
      },[message])
     
  return (<>
{contextHolder}
<Prodactform 
formData={formData} 
setFormData={setFormData} 
imagePreview={imagePreview} 
setImagePreview={setImagePreview}
handleImageChange={handleImageChange} 
handleSubmit={handleSubmit} 
products={products}
>
    <Button
      text='Update'
      Type="submit"
      style={styleupdate}
    
    />
</Prodactform>
   <Delete id={id}/>
</>
  );
}
