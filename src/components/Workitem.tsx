import React from "react";
import del from "../assets/images/del.png"
import up from "../assets/images/up.png"
import down from "../assets/images/down.png"
import save from "../assets/images/save.png"
import edit from "../assets/images/edit.png"
type Work ={
    id:number;
    swork:string;
};
type Props={
    w:Work;
    idx:number;
    editID:null|number;
    editText:string;
    handleinputEdit:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    handkey:(e:React.KeyboardEvent<HTMLInputElement>,id:number)=>void;
    delHandle:(id:number)=>void;
    moveUpHandle:(index:number)=>void;
    moveDownHandle:(index:number)=>void;
    startEdit:(id:number,swork:string)=>void;
    saveEdit:(id:number)=>void; 

};
export default function Workitem({w,idx,editID,editText,handleinputEdit,handkey,delHandle,moveUpHandle,moveDownHandle,startEdit,saveEdit}:Props){
    return(
    <li className="m-[15px] p-[10px] text-[20px] boder-2 rounded-lg flex justify-between">
        {editID===w.id?(<input value={editText} onChange={handleinputEdit} onKeyDown={(e)=>handkey(e,w.id)} className="border px-2 rounded-lg"/>):(<p>{w.swork}</p>)}
        <div className="flex">
            <button onClick={()=>delHandle(w.id)} className="ml-[100px] w-[30px] bg-[#819A91] rounded-lg flex justify-center items-center">
                <img src={del} className="w-[20px] h-[20px]"/>
            </button>
            <button onClick={()=>moveUpHandle(idx)} className="w-[30px] h-[30px] bg-[#819A91] ml-[5px] mr-[5px] rounded-lg flex justify-center items-center">
                <img src={up} className="w-[20px] h-[20px]"/>
            </button>
            <button onClick={()=>moveDownHandle(idx)} className="w-[30px] h-[30px] bg-[#819A91] rounded-lg flex justify-center items-center">
                <img src={down} className="w-[20px] h-[20px]"/>
            </button>
            {editID===w.id?(<button onClick={()=>saveEdit(w.id)} className="w-[30px] h-[30px] bg-[#819A91] rounded-lg flex justify-center items-center ml-[5px] "><img src={save} className="w-[20px] h-[20px]"/></button>):(<button onClick={()=>startEdit(w.id,w.swork)} className="w-[30px] h-[30px] bg-[#819A91] rounded-lg flex justify-center items-center ml-[5px]"><img src={edit} className="w-[20px] h-[20px]"/></button>)}
        </div>
    </li>
    );   
}