import React, { useEffect, useState } from 'react';
import Input from '../../shared/Forms/input_form';
import Button from '../../shared/Buttons/button';
import { remove, update } from '@/app/store/slice/product';
import { useDispatch, useSelector } from 'react-redux';

 
  export default function Prodactform({ products,Type,children,setFormData,formData,imagePreview,setImagePreview,handleSubmit,handleImageChange}) {
    
  const styleInput = "outline-none w-full text-base font-sm text-gray-900 focus:outline-none bg-transparent focus:bg-transparent";
  const styleContener = "w-full p-5 h-[60px] flex items-center  justify-center gap-[10px] border border-[1px] border-[#EEE] bg-[#FFF] rounded-[30px]";
  
 

  return (
    <form className="mt-10 flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        Icon=''
        styleContener={styleContener}
        type="text"
        name="title"
        handlingUpdate={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        styleInput={styleInput}
        placeholder={products.title}
      />
      <Input
        Icon=''
        styleContener={styleContener}
        type="text"
        name="category"
        handlingUpdate={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        styleInput={styleInput}
        placeholder={products.category}
      />
      <Input
        Icon=''
        styleContener={styleContener}
        type="text"
        name="price"
        handlingUpdate={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        styleInput={styleInput}
        placeholder={products.price}
      />
      <Input
        Icon=''
        styleContener={styleContener}
        type="text"
        name="description"
        handlingUpdate={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        styleInput={styleInput}
        placeholder={products.description}
      />
      <div className="flex items-center">
        {imagePreview && (
          <img src={imagePreview} alt="Selected Image" className="w-20 h-20 mr-4" />
        )}
        <div className={styleContener}>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: 'none' }} // Hide the input visually
          />
          <div
            onClick={(e) => e.target.previousElementSibling.click()}
            className={styleInput}
          >
            Select Image
          </div>
        </div>
      </div>
      <div className='flex gap-4'>
{children}

      </div>
    </form>
  );
}
