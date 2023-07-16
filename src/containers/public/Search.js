import React, { memo } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const SearchAll = () => {
    const [active, setactive] = useState(0);
    return (
        <div>
            <div className='w-full border-b border-default '>
                <div className='flex px-9 font-medium text-sm gap-4 text-[#ddd] items-center cursor-pointer   '>
                    <h3 className='text-2xl font-bold text-main '>KẾT QUẢ TÌM KIẾM</h3>
                    <span className={active === 0 ? 'border-b-2 border-btn py-4  ' : 'cursor-pointer hover:text-main '} onClick={()=>setactive(0)}>TẤT CẢ</span>
                    <span className={active === 1 ? 'border-b-2 border-btn py-4  ' : 'cursor-pointer hover:text-main '} onClick={()=>setactive(1)}>BÀI HÁT</span>
                    <span className={active === 2 ? 'border-b-2 border-btn py-4  ' : 'cursor-pointer hover:text-main '} onClick={()=>setactive(2)}>PLAYLIST/ALBUM</span>
                    <span className={active === 3 ? 'border-b-2 border-btn py-4  ' : 'cursor-pointer hover:text-main '} onClick={()=>setactive(3)}>NGHỆ SĨ/OA </span>
                    <span className={active === 4 ? 'border-b-2 border-btn py-4  ' : 'cursor-pointer hover:text-main '} onClick={()=>setactive(4)}>MV</span>
                </div>
            </div>
            <div className='w-full h-5'>

            </div>
            <div>
                <Outlet/>
            </div>
        </div>
        
    );
}

export default memo(SearchAll);
