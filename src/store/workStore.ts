import { create } from 'zustand'
import { persist } from 'zustand/middleware'
type Work ={
    id:number ;
    swork:string
};
type workStore={
    work:Work[];
    editID:number|null;
    editText:string;
    addWork: (text:string)=>void
    deleteWork:(id:number)=>void
    moveUp:(index:number)=>void
    moveDown:(index:number)=>void
    startEdit:(id:number,text:string)=>void
    saveEdit:(id:number)=>void
    setEditText:(text:string)=>void
}
export const useWorkStore = create<workStore>()(
    persist(
        (set,get)=>({
            work:[],
            editID:null,
            editText:"",
            addWork:(text:string)=>{
                // nếu rỗng trả về luôn không thực hiện nữa
                if(text.trim()===""){
                    return ;
                }
                // khai báo một đối tượng việc mới
                const newwork = {id:Math.floor(Math.random()*10000),swork:text};
                // thêm việc mới vào bằng phương thức set
                set({work:[...get().work,newwork]});
            },
            deleteWork:(id:number)=>{
                // sét giá trị mới khi filter không khớp với id
                set({work:get().work.filter((w)=> w.id !== id)})
            },
            moveUp:(index)=>{
                // nếu là phần đâu là trả về luôn không cần khỏi tạo nữa
                if(index===0){
                    return ;
                }
                // tạo ra new work 
                const newWork =[...get().work];
                // hoán đổi lại ví trí
                [newWork[index-1],newWork[index]]=[newWork[index],newWork[index-1]]
                // cập nhật lại
                set({work:newWork})
            },
            moveDown:(index)=>{
                // tạo ra mảng công việc mới
                const newWork =[...get().work];
                // nếu bằng phần tử dưới thì kết thúc
                if(index===newWork.length-1){
                    return;
                }
                // hoán đổi vị trí index+1
                [newWork[index],newWork[index+1]]=[newWork[index+1],newWork[index]];
                // cập nhật lại trạng thái
                set({work:newWork});
            },
            startEdit:(id:number,text:string)=>{
                // lấy id và nội dung công việc
                set({editID:id,editText:text});
            },
            saveEdit:(id:number)=>{
                // nếu id trùng id work thì hãy thực hiện sưa nội dung công việc ->đưa trạng thái editId về null và editText về ""
                set({work:get().work.map((w)=>w.id===id?{...w,swork:get().editText}:w),editID:null,editText:""})
            },
            setEditText:(text:string)=>set({editText:text})
        }),
        {name:"worklist"}    
    )
)