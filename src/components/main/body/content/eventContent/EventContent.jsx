import React from 'react';
import ddimage from "../../../../../assets/diem-danh.jpeg"
import vqimage from "../../../../../assets/vong-quay.jpeg"
import igimage from "../../../../../assets/ingame.png"
import gvimage from "../../../../../assets/gio-vang.png"
import pmimage from "../../../../../assets/phong-may.jpeg"
import taimage from "../../../../../assets/thuc-an.jpeg"
import './EventContent.scss'
import { Badge } from 'antd';



const EventContent = (props) => {
    const { openContent, setOpenRotation, setOpenContent, setTitleBack } = props
    const handleOpenRotation = (value) => {
        setOpenContent(false)
        setOpenRotation(true)
        setTitleBack(value.title)
    }
    const event = [
        {
            id:1,
            image: ddimage,
            title: 'Điểm Danh',
            descriptions: 'Thoải mái tuỳ chỉnh yêu cầu và phần thưởng Điểm Danh',
            statusAccess: 'success',
            nameStatus: 'Hoạt động',
        },
        {
            id: 2,
            image: vqimage,
            title: 'Vòng Quay Vô Cực',
            descriptions: 'Thoải mái tuỳ chỉnh yêu cầu và phần thưởng Vòng Quay Vô Cực',
            statusAccess: 'success',
            nameStatus: 'Hoạt động',
        }, {
            id:3,
            image: igimage,
            title: 'Ingame',
            descriptions: 'Thoải mái tuỳ chỉnh yêu cầu và phần thưởng Ingame',
            statusAccess: 'success',
            nameStatus: 'Hoạt động',
        }, {
            id:4,
            image: gvimage,
            title: 'Nạp Giờ Vàng',
            descriptions: 'Thoải mái tuỳ chỉnh yêu cầu và phần thưởng Nạp Giờ Vàng',
            statusAccess: 'error',
            nameStatus: 'Bảo trì',
        }, {
            id:5,
            image: pmimage,
            title: 'Online Phòng Máy',
            descriptions: 'Thoải mái tuỳ chỉnh yêu cầu và phần thưởng Online Phòng Máy',
            statusAccess: 'error',
            nameStatus: 'Bảo trì',
        }, {
            id:6,
            image: taimage,
            title: 'Ăn Uống',
            descriptions: 'Thoải mái tuỳ chỉnh yêu cầu và phần thưởng Ăn Uống',
            statusAccess: 'error',
            nameStatus: 'Bảo trì',
        },
    ]
    return (
        <>
            {
                openContent ?
                    (<div div className='event-body' >
                        <ul>
                            {
                                event.map((item,index) => {
                                    return (
                                        <li className='body-wraper' key={index} onClick={()=>{handleOpenRotation(item)}}>
                                            <img src={item.image} className='body-thumb' alt={item.title} />
                                            <h3 className='body-title'>{item.title}</h3>
                                            <div className='body-decrips'>{item.descriptions}</div>
                                            <div className='body-status'>
                                                <Badge status={item.statusAccess} className='status' />
                                                <div className={item.statusAccess === 'success' ? "status-success" : "status-error" }>{item.nameStatus}</div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div >) : <></>
            }
        </>
    );
};

export default EventContent;