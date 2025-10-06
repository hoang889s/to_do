import React from "react";
import Workitem from "./Workitem";

type Work ={
    id:number;
    swork:string;
};
type Props ={
    work:Work[];
    //idx:number;
    editID:null|number;
    editText:string;
    handleinputEdit:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    handkey:(e:React.KeyboardEvent<HTMLInputElement>,id:number)=>void;
    delHandle:(id:number)=>void;
    moveUpHandle:(index:number)=>void;
    moveDownHandle:(index:number)=>void;
    startEdit:(id:number,swork:string)=>void;
    saveEdit:(id:number)=>void; 
}
export default function WorkList({work,editID,editText,handleinputEdit,handkey,delHandle,moveUpHandle,moveDownHandle,startEdit,saveEdit}:Props){
    return(
        <div className="m-[15px] max-h-[400px] overflow-y-auto custom-list-scroll">
            <ul>
                {work.map((w,idx:number)=>(
                    <Workitem key={w.id} w={w} idx={idx} editID={editID} editText={editText} handleinputEdit={handleinputEdit} handkey={handkey} delHandle={delHandle} moveDownHandle={moveDownHandle} moveUpHandle={moveUpHandle} startEdit={startEdit} saveEdit={saveEdit}/>
                ))}
            </ul>
        </div>
    );   
}