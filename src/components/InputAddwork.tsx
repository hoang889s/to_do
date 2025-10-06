import React from "react";
type Props={
    datainput:string;
    handleInput:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    handAddWork:()=>void;
}
export default function InputAddwork({datainput,handleInput,handAddWork}:Props){
    return(
    <div>
        <input className="ip w-[400px] m-[15px] h-[35px] focus:outline-none border-b-2 border-black" type="text" placeholder="Thêm vào một công việc" onChange={handleInput} value={datainput} onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>)=>{if(e.key==="Enter"){handAddWork();}}}/>
        <button onClick={handAddWork} className="bg-[#819A91] w-[40px] h-[40px] rounded-lg">+</button>
    </div>
    );
}