'use client'
import React from 'react'

export default function tables() {
    const [open, setOpen] = useState(false);
    const [modalData,setModalData]=useState({});
    const [filter,setFilter]=useState('firstName');
 const [campus,SetCampus]=useState([]);
    const [ids,setID]=useState(null);
    const [messageApi, contextHolder] = message.useMessage();
    function success(info){
      messageApi
        .open({
          type: 'success',
          content: 'Processing',
          duration: 2.5,
        })
        .then(() => message.success(info, 2.5))
      
    };
    function menuAction(id){
setID(id)
    }
    const handleClick = ( id,key ) => {
      if(key==='Active'){
        console.log(id)
        axios.post(`${BASE_URL}/api/activate-admin?`,{
          token:token,
        campusID:props.selectedValue,
        adminID:id
      })

        .then(function (response) {
      // handle success   
   
          if(response.data?.status===200){
         
           success(response.data?.message);
          }
        })
        .catch(function (error) {
          // handle error
          success(error)
        })
        .finally(function () {
          // always executed
        });
      }else if(key==='DeActivate'){
        axios.post(`${BASE_URL}/api/deactivate-admin?token=${token}&campusID=${props.selectedValue}&adminID=${id}`)
        .then(function (response) {
      // handle success   
    
          if(response.data?.status===200){
           
            success(response.data?.message);
          }
        })
        .catch(function (error) {
          // handle error
          success(error)
        })
        .finally(function () {
          // always executed
        });
      }else if(key==='Delete'){
        axios.delete(`${BASE_URL}/api/delete-admin?token=${token}&adminID=${id}&campusID=${props.selectedValue}`)
    .then(function (response) {
  // handle success   
     
      if(response.data?.status===200){
       
        success(response.data?.message);
      }
    })
    .catch(function (error) {
      // handle error
      success(error);
    })
    .finally(function () {
      // always executed
    });
      }
    };
    function menu(id){
      
    return(
        <Menu >
          <Menu.Item onClick={()=>handleClick(id,'Active')} key="Active">Active</Menu.Item>
          <Menu.Item onClick={()=>handleClick(id,'DeActivate')} key="DeActive">Deactive</Menu.Item>
          <Menu.Item onClick={()=>handleClick(id,'Delete')}  key="Delete">Delete</Menu.Item>
        </Menu>
      );
      
    } 
  
const token=Cookies.get('token');

   
   const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(value);
  };

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + rowsPerPage;
  const [searchQuery, setSearchQuery] = useState('');
 
  const filteredData =props.Admin!=null&& props.Admin.filter((item) =>
  {
    // Filter based on selected option
    if (filter === 'all') {
      return true; // Include all items if "all" is selected
    } else if (filter === 'active') {
      return item.status === 'active'; // Filter based on "isActive" property
    } else if (filter === 'inactive') {
      return item.status === 'In active'; // Filter based on "isActive" property
    } else if (filter === 'panding') {
      return item.status === 'Panding'; // Filter based on "isSuspended" property
    }
 
    // Filter based on search query
    if (
      item.firstName.toLowerCase().includes(searchQuery.toLowerCase())||
      item.lastName.toLowerCase().includes(searchQuery.toLowerCase())||
      item.phone.toLowerCase().includes(searchQuery.toLowerCase())
      // item.log.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
      return true;
    }
    return false;
  }
  );
  const currentItems = props.Admin!=null&&  filteredData.slice(itemOffset, endOffset);
  const pageCount =props.Admin!=null&& Math.ceil(filteredData.length / rowsPerPage);
  const [formData,setFormData]=useState({
    Firstname:null,
    Lastname:null, 
    Email:null,
    Password:null, 
    campusID:null
  });
function handleSubmit(e){
   e.preventDefault();
setFormData({...formData,[e.target.name]:e.target.value})
}

const newAdmin=()=>{
  setOpen(true);
}

const Invite=()=>{
  if(formData.Email!=null){
    axios.post(`${BASE_URL}/api/invite-admin?`,{
      token:token,
      firstName:formData.Firstname,
      lastName:formData.Lastname,
      email:formData.Email,
      campusID:formData.campusID
    })
    .then(function (response) {
  // handle success   
 
      if(response.data?.status==200){
       
  setOpen(false)
  success(response.data?.message);
      }else if(response?.status==404){
        success(response.data?.message);
      }else{
        success(response.data?.message);
      }
    })
    .catch(function (error) {
      // handle error
      success(error);
    })
    .finally(function () {
      // always executed
    });
  }

 }

  return (
    <div className=" bg-white mt-[20px] mb-5">

<div className="">
<img className='w-full mt-[0px]' src={horizon} alt="" />
</div>

<div className=' flex justify-center gap-8  mt-[-101px]  h-full ' >

<div className="   bg-white w-[90%]  border border-solid ">
   <div className="flex justify-between items-center h-[48px]  w-full  mr-[41px]">
  <div className='flex gap-4 items-center '>
    <select className="ml-[16px] "  onChange={(e) => setFilter(e.target.value)} > 
        <option value="Filter">Filter</option>
        <option value="active">Active</option>
        <option value="panding">Panding</option>
        <option value="inactive">In Active</option>
      
    </select>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 10.0008C12.9391 10.0008 11.9217 10.4222 11.1716 11.1723C10.4214 11.9225 10 12.9399 10 14.0008C10 15.0616 10.4214 16.079 11.1716 16.8292C11.9217 17.5793 12.9391 18.0008 14 18.0008C15.0609 18.0008 16.0783 17.5793 16.8284 16.8292C17.5786 16.079 18 15.0616 18 14.0008C18 12.9399 17.5786 11.9225 16.8284 11.1723C16.0783 10.4222 15.0609 10.0008 14 10.0008ZM8 14.0008C7.99988 13.0565 8.22264 12.1255 8.65017 11.2835C9.0777 10.4415 9.69792 9.71236 10.4604 9.15529C11.2229 8.59822 12.1061 8.22898 13.0381 8.0776C13.9702 7.92622 14.9249 7.99698 15.8245 8.28412C16.724 8.57126 17.5432 9.06667 18.2152 9.73006C18.8872 10.3935 19.3931 11.2061 19.6919 12.1019C19.9906 12.9977 20.0737 13.9514 19.9343 14.8853C19.795 15.8193 19.4372 16.7072 18.89 17.4768L23.707 22.2938C23.8892 22.4824 23.99 22.735 23.9877 22.9972C23.9854 23.2594 23.8802 23.5102 23.6948 23.6956C23.5094 23.881 23.2586 23.9862 22.9964 23.9884C22.7342 23.9907 22.4816 23.8899 22.293 23.7078L17.477 18.8918C16.5794 19.53 15.5233 19.9089 14.4247 19.9869C13.326 20.0648 12.2271 19.8389 11.2483 19.3337C10.2695 18.8286 9.44869 18.0638 8.87572 17.1231C8.30276 16.1824 7.99979 15.1022 8 14.0008Z" fill="#48535B"/>
</svg>
<input type="text" placeholder='Search'   value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}  className='w-[500px] h-[30px]  p-3 bg-white hover:bg-transparent active:bg-transparent'/>
 
  </div>
   <div className="flex gap-5 items-center">

<Button name='New +'  handlclick={newAdmin} style=' w-[97px] h-[36px]  text-[14px]  mr-[50px] bg-[#4094F7]' >Invite</Button>

   </div>
    </div> 
    {props.Admin===null?<p>select your campus</p>
     :props.Admin.length!=0?
   
 <table className="w-full ">
  
    <tr className="border border-t-solide  h-[48px] hover:bg-gray-100">
       
        <th> 

   <div className="flex gap-2 p-2">
    <p className='text-[#6E7C87] text-[14px]'>ID</p>
    <svg  width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.292787 5.70679C0.105316 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105316 4.48031 0.292787 4.29279L4.29279 0.292786C4.48031 0.105315 4.73462 0 4.99979 0C5.26495 0 5.51926 0.105315 5.70679 0.292786L9.70679 4.29279C9.88894 4.48139 9.98974 4.73399 9.98746 4.99619C9.98518 5.25838 9.88001 5.5092 9.6946 5.6946C9.5092 5.88001 9.25838 5.98518 8.99619 5.98746C8.73399 5.98974 8.48139 5.88894 8.29279 5.70679L5.99979 3.41379V14.9998C5.99979 15.265 5.89443 15.5194 5.70689 15.7069C5.51936 15.8944 5.265 15.9998 4.99979 15.9998C4.73457 15.9998 4.48022 15.8944 4.29268 15.7069C4.10514 15.5194 3.99979 15.265 3.99979 14.9998V3.41379L1.70679 5.70679C1.51926 5.89426 1.26495 5.99957 0.999786 5.99957C0.734622 5.99957 0.480314 5.89426 0.292787 5.70679V5.70679Z" fill="#DBDBDB"/>
</svg>


   </div>
        </th>
        <th>

   <div className="flex gap-2 ">
   <p className='text-[#6E7C87] text-[14px]'>FirstName</p>
  
   </div>
        </th>
        <th>

   <div className="flex gap-2">
   <p className='text-[#6E7C87] text-[14px]'>LastName</p>
  
   </div>
        </th>
        <th>

   <div className="flex gap-2">
   <p className='text-[#6E7C87] text-[14px]'>Phone</p>
  
   </div>
        </th>
        <th>

   <div className="flex gap-2">
   <p className='text-[#6E7C87] text-[14px]'>Members</p>
   
   </div>
        </th>
        <th>

   <div className="flex gap-2">
   <p className='text-[#6E7C87] text-[14px]'>Log</p>
   
   </div>
        </th>
        <th>

   <div className="flex gap-2">
   <p className='text-[#6E7C87] text-[14px]'>Status</p>
   
   </div>
        </th>
        <th></th>
        
    </tr>

   {currentItems.map((data,index)=>(
    <tr className="border border-solide h-[40px] hover:bg-gray-100 " key={index}  >
   
    <td className="pl-2">{index<9?`0${index+1}`:index+1}</td>
    <td className="">{data.firstName}</td>
    <td className="">{data.lastName}</td>
    <td className="">{data.phone}</td>
    <td className="">{data.promotedBy===data.id?'Owner':'Admin'}</td>
    <td className="">{data.log}</td>
   
    <td className="">
        <p  className={`rounded-[6px] text-[14px] px-2 py-1 w-20 text-center  ${data.status==='inactive'?' text-[#CC0905] bg-[#FFEFEB]':data.status==='pending'?'text-[#0452C8] bg-[#EBF7FF]':'text-[#119C2B] bg-[#EBFFF1] '}`}>
        {data.status}

        </p>
        
        </td>
    <td className="flex justify-center items-center">
  
    <Dropdown overlay={()=>menu(data.id)} trigger={["click"]}>
    <a
      className="ant-dropdown-link"
      onClick={() => menuAction(data.id)}
      style={{ color: "#d46b08", fontWeight: "bold" }}
    >
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12ZM14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12ZM18 14C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10C17.4696 10 16.9609 10.2107 16.5858 10.5858C16.2107 10.9609 16 11.4696 16 12C16 12.5304 16.2107 13.0391 16.5858 13.4142C16.9609 13.7893 17.4696 14 18 14Z" fill="#5B6871"/>
</svg> 
    </a>
</Dropdown>



    </td>
  </tr>
   ))}
  
  
</table> 
: <Skeleton active/>}
</div>

        </div>
        <div className="flex justify-center items-center gap-5 p-5 w-full ">
        <PaginatedItems pageCount={pageCount} itemsPerPage={rowsPerPage}  items={props.Admin} setItemOffset={setItemOffset} />
        <RowSelect onChange={handleRowsPerPageChange} />
    
        </div>
<ProfileModal width='300' cancel={()=>setOpen(false)} setOpen={setOpen} open={open} title='invite new admin ' Button='Invite' Action={Invite} >
    <div>
       
        <div>
        <div className=''>
      <Input placeholder='  First Name'  lableStyle='authlable'  lable='First Name' name='Firstname' type='text' style='authinput  w-[600px] h-[50px] font-plus  invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 '  onChange={(e)=>handleSubmit(e)}/>
      <Input placeholder='  Last Name' lableStyle='authlable'  lable='Last Name' name='Lastname' type='text' style='authinput   w-[600px] h-[50px] '  onChange={(e)=>handleSubmit(e)}/>
        </div>
       <div className=''>
      <Input placeholder='  @gmail.com' lableStyle='authlable'  lable='Email' name='Email' type='email' style='authinput   w-[600px] h-[50px] font-plus invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 '  onChange={(e)=>handleSubmit(e)}/>
    </div>
    <div>
      <p className='text-[16px] font-plus authlable'>Select Campus</p>
      <select name="campusID" id="" onChange={(e)=>handleSubmit(e)}>
        <option value=''>select Campus </option>
        {campus.length!=0?campus.Active_Campuses.map((data,index)=>(
  <option key={index} value={data.About_Section_Contents.campusID}>{data.Welcome_Section_Contents.campusName  }</option>
        )):''}
      
      </select>
    </div>
        </div>
    </div>
  
</ProfileModal>
            </div>
  )
}
