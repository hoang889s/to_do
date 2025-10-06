import { useState } from 'react'
import { useWorkStore } from './store/workStore'
import InputAddwork from './components/InputAddwork';
import WorkList from './components/WorkList';

function App() {
  const {work,editID,editText,addWork,deleteWork,moveUp,moveDown,startEdit,saveEdit,setEditText}=useWorkStore() 
  //sắp sử thay đổi input mà khi input không thực hiện không  gì thay đổi cả
  const [datainput,setdatainput]=useState<string>('');
  // hàm nhận input từ ô input
  function handleinput(e:React.ChangeEvent<HTMLInputElement>){
    setdatainput(e.target.value);
  }
  // hàm nhận từ ô input edit của phần tử thuộc li
  function handleinputedit(e:React.ChangeEvent<HTMLInputElement>){
    setEditText(e.target.value);
  }
  // hàm nhận sự kiện phím enter để thực hiện công việc sửa text edit
  function handkey(e:React.KeyboardEvent<HTMLInputElement>,id:number){
    // nếu trùng với phím enter thì hãy lưu id
    if(e.key==='Enter'){
      saveEdit(id);
    }
  }
  // hàm thực hiện thêm công việc vào mảng từ ô inputchange
    function handaddwork(){
    //thực hiện thêm
    addWork(datainput);
    // sau khi thêm ngăn việc ô input còn giá trị thực hiện reset nó về rỗng
    setdatainput('');
  }
  /*
  //thiết kế hàm xóa mảng setinputdata hàm này sử dụng delete sử dụng của map..fillter
  function delhandle(index:number){
    //thực hiện xóa
    deleteWork(index);
  }
  //thiết kế hàm di chuyển của giữa cách phần tử trên mảng chi tiết ở đay là di chuyển lên
  function moveuphandle(index:number){
   
      moveUp(index);
    }
  //thiết kế hàm xuống di chuyển xuống của các phần tử của mảng
  function movedownhandle(index:number){
      moveDown(index);
    }
  // thiết kế chức năng edit thông tin trong web sẽ có hai hàm đảm nhận chức năng này
  // hàm 1 bắt đầu lấy các thông tin id và chuỗi chỉnh sửa
  function startedit(id:number ,str_work:string){
    startEdit(id,str_work);
  }
  //hàm 2 thực hiên lưu công việc đấy sau khi sửa ở list (cụ thể sẽ dựa theo id của công việc đó)
  function saveedit(id:number){
    saveEdit(id);
  }*/
  //console.log(datainput);
  return (
    <div className="bg-[#819A91] h-screen w-screen flex items-center justify-center">
      <div className="font-mono bg-[#EEEFE0] w-[800px] p-[15px] rounded-lg flex flex-col items-center ">
          <h1 className="text-3xl font-bold">Việc cần làm</h1>
          <InputAddwork datainput={datainput} handleInput={handleinput} handAddWork={handaddwork}/>
          <WorkList work={work} editID={editID} editText={editText} handleinputEdit={handleinputedit} handkey={handkey} delHandle={deleteWork} moveDownHandle={moveDown} moveUpHandle={moveUp} startEdit={startEdit} saveEdit={saveEdit} />
      </div>
    </div>
  );
}

export default App
