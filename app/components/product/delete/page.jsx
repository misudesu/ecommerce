import React, { useEffect, useState } from 'react';
import Input from '../../shared/Forms/input_form';
import Button from '../../shared/Buttons/button';
import { remove, update } from '@/app/store/slice/product';
import { useDispatch, useSelector } from 'react-redux';
import Prodactform from '../prodactForm/page';

export default function Delete({id}) {
    const styledelete = "mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
  
    const dispatch=useDispatch()
    const Delete=()=>{
        dispatch(remove(id))
      }
   
  return (
    <Button
    text='Delete'
    Type="submit"
    style={styledelete}
  handleClick={Delete}
  />
    
  );
}
