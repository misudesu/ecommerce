import React from 'react';
import Input from '../../shared/Forms/input_form';

 
  export default function Prodactform({ children,handlingUpdate,formDatas,imagePreview,handleSubmit,handleImageChange}) {
    
  const styleInput = "outline-none w-full text-base font-sm text-gray-900 focus:outline-none bg-transparent focus:bg-transparent";
  const styleContener = "w-full p-5 h-[60px] flex items-center  justify-center gap-[10px] border border-[1px] border-[#EEE] bg-[#FFF] rounded-[30px]";
  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4" >
      <Input
        Icon=''
        styleContener={styleContener}
        type="text"
        name="title"
        handlingUpdate={handlingUpdate}
        styleInput={styleInput}
        value={formDatas?.title}
        placeholder="title"
      />
      <Input
        Icon=''
        styleContener={styleContener}
        type="text"
        name="category"
        handlingUpdate={handlingUpdate
        }
        styleInput={styleInput}
        value={formDatas?.category}
        placeholder="category"
      />
      <Input
        Icon=''
        styleContener={styleContener}
        type="text"
        name="price"
        handlingUpdate={handlingUpdate
        }
        styleInput={styleInput}
        value={formDatas?.price}
        placeholder="price"
      />
      <Input
        Icon=''
        styleContener={styleContener}
        type="text"
        name="description"
        handlingUpdate={handlingUpdate
        }
        styleInput={styleInput}
        placeholder= "description"
        value={formDatas?.description}
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
            className={`${styleInput} text-center`}
          >
            Select Image
          </div>
        </div>
      </div>
   
{children}
      

  
    </form>
  
  );
}
