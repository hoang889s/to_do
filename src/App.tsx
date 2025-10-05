import { useState,useEffect } from 'react'
import del from './assets/images/del.png'
import up from './assets/images/up.png'
import down from './assets/images/down.png'
type objectwork={
  id:number,
  swork:string
};


function App() {
  //sắp sử thay đổi input mà khi input không thực hiện không  gì thay đổi cả
  const [datainput,setdatainput]=useState<string>('');
  // tạo ra useState rỗng để lưu trữ mảng công việc ban đầu là rỗng
  const [work,setwork]=useState<objectwork[]>(()=>{
     // khai báo hàm số lưu local
     const saved = localStorage.getItem("worklist");
     // nếu đúng trả vè JSON của local
     if(saved){
        return JSON.parse(saved);
     }
     // ngược lại sẽ trả mảng rỗng
     else{
        return [];
     }
  });
  // mỗi khi mảng work thay đổi thì hãy thực hiện lưu localstoreage sủ dụng useEffect()
  useEffect(()=>{
      localStorage.setItem("worklist",JSON.stringify(work));

  },[work]);
  // hàm nhận input từ ô input
  function handleinput(e:React.ChangeEvent<HTMLInputElement>){
    setdatainput(e.target.value);
  }
  // hàm thực hiện thêm công việc vào mảng từ ô inputchange
  function handaddwork(){
    //kiểm tra nếu input rỗng thì nagw việc thêm công việc vào mảng để không cho công việc rỗng thêm vào mảng
    if(datainput.trim() ===''){
      return;
    }
    // qua được kiểm tra thì lúc này sẽ thêm công việc ở đây
    // bước 1 tạo ra một công việc được thêm ở input 
    const newwork:objectwork={
      id:Math.floor(Math.random() * 10000),
      swork:datainput
    }
    // Bước 2 thêm công việc mới vào mảng work
    setwork([...work,newwork]);
    // sau khi thêm ngăn việc ô input còn giá trị thực hiện reset nó về rỗng
    setdatainput('');
  }
  //thiết kế hàm xóa mảng setinputdata hàm này sử dụng delete sử dụng của map..fillter
  function delhandle(index:number){
      // ở đây nó  hoạt động bằng nguyên lý là dựa trên chỉ số của mảng cần xóa và đưa ra chỉ số và tạo ra mảng mới
      const delwork = work.filter(w=>w.id!==index);
      //sau khi thực hiện việc xóa nhưng mảng chưa cập nhập thực hiện lại mảng bằng cách cập nhật usestage đê hiện thị dữ liệu mới
      setwork(delwork);
  }
  //thiết kế hàm di chuyển của giữa cách phần tử trên mảng chi tiết ở đay là di chuyển lên
  function moveuphandle(index:number){
      // hàm này sẽ dựa trên khả nhawgn hoán đỏi vị trí của các phần tử đượck gọi là swap
      // bước 1 phải rằng buộc được nêu ở ví trí đầu thì khng làm gì cả
      if(index===0){
        return;
      }
      //bước sau khi vượt qua kiểm tra thì lúc này hãy tạo ra mảng sao chép mới
      const moveup = [...work];
      // khai báo một tham số tạm để chứa mảng index hiện tại 
      const temp = moveup[index];
      // đổi mảng index hiện tại với index -1
      moveup[index]=moveup[index-1];
      // đổi index-1 với temp
      moveup[index-1]=temp;
      // cập nhật lại trạng thái của mạng
      setwork(moveup)
    }
  //thiết kế hàm xuống di chuyển xuống của các phần tử của mảng
  function movedownhandle(index:number){
      // hàm này sẽ dựa trên khả nhawgn hoán đỏi vị trí của các phần tử đượck gọi là swap
      // bước 1 phải rằng buộc được nêu ở ví trí đầu thì khng làm gì cả
      if(index===work.length-1){
        return;
      }
      //bước sau khi vượt qua kiểm tra thì lúc này hãy tạo ra mảng sao chép mới
      const movedown = [...work];
      // khai báo một tham số tạm để chứa mảng index hiện tại 
      const temp = movedown[index];
      // đổi mảng index hiện tại với index +1
      movedown[index]=movedown[index+1];
      // đổi index-1 với temp
      movedown[index+1]=temp;
      // cập nhật lại trạng thái của mạng
      setwork(movedown)
    }
  console.log(datainput);
  return (
    <>
    <div className='bg-[#819A91] h-screen w-screen flex items-center justify-center '>
      <div className="font-mono bg-[#EEEFE0] w-[800px] hop p-[15px] rounded-lg flex flex-col items-center ">
        <h1 className=' text-3xl font-bold'>Việc cần làm</h1>
        <div className="">
          
          <input className="ip w-[400px] m-[15px] h-[35px]   focus:outline-none  border-b-2 border-black " type="text" placeholder='Thêm vào một công việc' onChange={handleinput} value={datainput} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>)=>{if(e.key==='Enter'){handaddwork();}}}/>
          <button onClick={handaddwork} className="bg-[#819A91] w-[40px] h-[40px] rounded-lg">+</button>
        </div>
        <div className="m-[15px] max-h-[400px] overflow-y-auto custom-list-scroll">
          <ul>
            {work.map((w,idx)=>(
              <li key={w.id} className="m-[15px] p-[10px] text-[20px] border-2 rounded-lg flex justify-between">
                <p>{w.swork}</p>
                  <div className="flex">
                    <button onClick={()=>delhandle(w.id)} className="ml-[100px] w-[30px] h-[30px] bg-[#819A91] rounded-lg flex justify-center items-center"><img src={del} className="w-[20px] h-[20px]"/></button>
                    <button onClick={()=>moveuphandle(idx)} className="w-[30px] h-[30px] bg-[#819A91] ml-[5px] mr-[5px] rounded-lg flex justify-center items-center"><img src={up} className="w-[20px] h-[20px]"/></button>
                    <button onClick={()=>movedownhandle(idx)} className="w-[30px] h-[30px] bg-[#819A91] rounded-lg flex justify-center items-center"><img src={down} className="w-[20px] h-[20px]"/></button>
                  </div>
                </li>
            ))}
          </ul>
        </div>
     </div>
    </div>
    </>
  )
}

export default App
