import React, { useEffect, useRef, useState } from 'react';
import './EventRotation.scss'
import { Switch, TimePicker } from "antd";
import banner from "../../../../../assets/banner.jpeg"
import bannerha from "../../../../../assets/bannerha.jpeg"
import bannerthu from "../../../../../assets/bannerthu.jpeg"
import bannerdong from "../../../../../assets/bannerdong.jpeg"
import bannermd from "../../../../../assets/bannermd.jpeg"



import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import dayLocaleData from "dayjs/plugin/localeData";
import { Calendar, Col, Row, Select, Typography, theme } from "antd";
import { ArrowClockwise, ArrowsDownUp, CaretLeft, CaretRight, Clipboard, Clock, Coin, FileText, PlusCircle, X } from '@phosphor-icons/react';
import SaveButton from '../../../../elements/buttons/SaveButton/SaveButton';
import ChangeButton from '../../../../elements/buttons/ChangeButton/ChangeButton';
import MutilButton from '../../../../elements/buttons/MutilButton/MutilButton';
import InforResult from '../../../../elements/buttons/InforResult/InforResult';
import Pay from '../../../../elements/buttons/Pay/Pay';
import moment from 'moment';
import Rotation from '../../../../elements/buttons/Rotation/Rotation';

// import { NumberOne } from '@phosphor-icons/react';
dayjs.extend(dayLocaleData);

const EventRotation = ({ children, ...props }) => {
    const { openRotation, setOpenRotation, setOpenPay, setCurrentStept, setTitleBack, setOpenContent } = props;
    const [systemEvent, setSystemEvent] = useState([
        { text: "Thông tin mẫu", percent: 25 / 10 },
        { text: "Thông tin mẫu", percent: 25 / 10 },
        { text: "Thông tin mẫu", percent: 25 / 10 },
        { text: "Thông tin mẫu", percent: 25 / 10 },
        { text: "Thông tin mẫu", percent: 25 / 10 },
        { text: "Thông tin mẫu", percent: 25 / 10 },]);
    const [newGift, setNewGift] = useState('');
    const [gift, setGift] = useState('')
    const [bannerUpload, setBannerUpload] = useState('')
    const [onClickSort, setClickSort] = useState(false)
    const [numberDay, setNumberDay] = useState(0);
    const [onChecked, setOnChecked] = useState(false)
    const [valueChecked, setvalueChecked] = useState("không")
    const [openResultSystemTime, setOpenResultSystemTime] = useState(false)
    const [openResultSystemEvent, setOpenResultSystemEvent] = useState(false)
    const [hoursStart, setHoursStart] = useState(Array.from({ length: 24 }, (_, index) => index.toString().padStart(2, '0')));
    const [hoursEnd, setHoursEnd] = useState(Array.from({ length: 24 }, (_, index) => index.toString().padStart(2, '0')));
    const [valueStart, setValueStart] = useState('00')
    const [valueEnd, setValueEnd] = useState('00')
    const [clickItemRight, setClickItemRight] = useState(false)
    const [clickItemLeft, setClickItemLeft] = useState(false)
    const [currentMonth, setCurrentMonth] = useState(moment().month());



    // const contentRef = useRef(null);
    useEffect(() => {
        // Cuộn nội dung lên đầu trang khi state thay đổi
        document.body.scrollIntoView({ behavior: 'smooth' });
    }, [openRotation]);



    // console.log("check systemEvent:", systemEvent)
    const { token } = theme.useToken();
    const onPanelChange = (value, mode) => {
        console.log(value.format("YYYY-MM-DD"), mode);
    };
    const wrapperStyle = {
        // width: 300,
        paddingRight: "25px"
        // border: `1px solid ${token.colorBorderSecondary}`,
        // borderRadius: token.borderRadiusLG,
    };

    const hours = Array.from({ length: 23 }, (_, index) => index); // Tạo một mảng từ 0 đến 22

    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    // const handleTimeChange = (type, time) => {
    //     if (type === 'start') {
    //         setStartTime(time);
    //     } else if (type === 'end') {
    //         setEndTime(time);
    //     }
    // };

    // const disabledHours = () => {
    //     // Không cho phép chọn giờ từ 23:00 đến 24:00
    //     const hours = [];
    //     for (let i = 0; i < 24; i++) {
    //         if (i > 22) {
    //             hours.push(i);
    //         }
    //     }
    //     return hours;
    // };
    const [selectedDates, setSelectedDates] = useState([]);

    const dateFullCellRender = (value) => {
        const date = value.format('YYYY-MM-DD');
        const isSelected = selectedDates.includes(date);
        let isInRange = [];
        // console.log("check length:", totalDay, totalDay.length)


        // console.log("check length:", date)
        if (selectedDates.length >= 2) {
            let startDate = dayjs(selectedDates[0]); // Ngày bắt đầu
            let endDate = dayjs(selectedDates[1]); // Ngày kết thúc


            //Kiểm tra nếu startDate lớn hơn endDate, thì hoán đổi giá trị của hai biến
            if (startDate.isAfter(endDate)) {
                [startDate, endDate] = [endDate, startDate];
            }

            // Duyệt qua từng ngày trong khoảng từ startDate đến endDate
            let daysInRange = [];
            for (let currentDate = startDate; currentDate.isBefore(endDate); currentDate = currentDate.add(1, 'day')) {
                isInRange.push(currentDate); // Push ngày vào mảng
            }
            // Xoá phần tử đầu tiên của mảng isInRange
            isInRange.shift();
            // console.log("check length:", isInRange.length)
            // numberOfDaysInRange = isInRange.length + 2;
            setNumberDay(isInRange.length + 2);

        }
        if (selectedDates.length < 2) {
            setNumberDay(0);
        }


        let cellClassName = '';
        if (isSelected) {
            cellClassName = 'selected-date';
        } else if (isInRange.some(date => date.isSame(value, 'day') && date.month() === value.month())) {
            cellClassName = 'range-date'; // Nếu ngày thuộc vào tháng hiện tại, áp dụng lớp range-date
            // const count = calculateNumberOfDaysInRange();
            // setNumberOfDaysInRange(isInRange);
        }

        return (
            <div className={cellClassName}>
                {value.date()}
            </div>
        );
    };


    const handleDateSelect = (value) => {
        const date = value.format('YYYY-MM-DD');
        if (selectedDates.length < 2 && !selectedDates.includes(date)) {
            setSelectedDates([...selectedDates, date]);
        } else {
            setSelectedDates(selectedDates.filter((d) => d !== date));
        }
    };

    const handlePay = () => {
        setOpenPay(true)
        setOpenRotation(false)
        setCurrentStept(1)
        setTitleBack('THANH TOÁN')
    }

    const handlePayCancel = () => {
        setOpenContent(true)
        setOpenRotation(false)

    }

    const handleChangeSystemEvent = (value) => {
        let item = { text: value, percent: 25 / 100 }
        setNewGift(item);
        setGift(value)
    }
    const handleInputChange = (event) => {
        event.preventDefault();
        if (newGift.length !== 0 && onClickSort === false) {
            setSystemEvent([...systemEvent, newGift])
            setGift('');
        }
    };
    const handleInputCancel = (index) => {
        const updatedTasks = systemEvent.filter((_, i) => i !== index);
        setSystemEvent(updatedTasks);
    }

    const bannerOption = [
        {
            name: bannermd,
            alt: 'md',
        },
        {
            name: banner,
            alt: 'mx',
        }, {
            name: bannerha,
            alt: 'mh',
        }, {
            name: bannerthu,
            alt: 'mth',
        }, {
            name: bannerdong,
            alt: 'mdo',
        },
    ]

    const handleUploadBanner = (item) => {
        setBannerUpload(item);
    }

    const handleChecked = () => {
        setOnChecked(!onChecked)
        if (onChecked === false) {
            setvalueChecked("có")
        } else {
            setvalueChecked("không")
        }

    }
    const handleSubmitSystemTime = () => {
        setOpenResultSystemTime(true)
    }
    const handleChangeSystemTime = () => {
        setOpenResultSystemTime(false)
    }
    const handleSubmitSystemEvent = () => {
        setOpenResultSystemEvent(true)
    }
    const handleChangeSystemEventBeforSave = () => {
        setOpenResultSystemEvent(false)
    }
    const handleClickStart = (value) => {
        setValueStart(value)
        setClickItemLeft(true)
    }
    const handleClickEnd = (value) => {
        setValueEnd(value)
        setClickItemRight(true)
    }

    // Hàm xử lý sự kiện khi giá trị tháng thay đổi từ bên ngoài
    // useEffect(() => {
    //     setCurrentMonth(value.month());
    // }, [value]);

    // Hàm xử lý sự kiện khi nhấn vào nút trái
    // const handleLeftButtonClick = (value) => {
    //     const newMonth = currentMonth - 1 >= 0 ? currentMonth - 1 : 11;
    //     const now = value.month(newMonth);
    //     setCurrentMonth(newMonth);
    //     // onChange(now);
    // };

    // // Hàm xử lý sự kiện khi nhấn vào nút phải
    // const handleRightButtonClick = (value) => {
    //     const newMonth = (currentMonth + 1) % 12;
    //     const now = value.month(newMonth);
    //     setCurrentMonth(newMonth);
    //     // onChange(now);
    // };




    return (
        <>
            {
                openRotation ? (<>
                    {children}
                    <div className='rotation-container'>


                        <div className='rotation-banner-game'>
                            <img src={bannerUpload || banner} className='banner' alt='banner' />
                            <div className='game'>
                                <Rotation systemEvent={systemEvent} />
                            </div>
                        </div>


                        <div className='rotation-system'>

                            <div className='system-time'>
                                <h2 className='time-title'>Cài Đặt Thời Gian</h2>
                                <p>(Các giá trị sẽ ảnh hưởng đến thời gian sự kiện)</p>
                                <div className='time-main'>
                                    <div className='cele'>
                                        {/* <h4 className='cele-title'>
                                Chọn một tháng
                            </h4> */}
                                        <div className='cele-main'>
                                            <div style={wrapperStyle}>
                                                <Calendar
                                                    fullscreen={false}
                                                    fullCellRender={dateFullCellRender}
                                                    onSelect={handleDateSelect}
                                                    headerRender={({ value, type, onChange, onTypeChange }) => {
                                                        const start = 0;
                                                        const end = 12;
                                                        const monthOptions = [];
                                                        let current = value.clone();
                                                        const localeData = value.localeData();
                                                        const months = [];
                                                        for (let i = 0; i < 12; i++) {
                                                            current = current.month(i);
                                                            months.push(localeData.monthsShort(current));
                                                        }
                                                        for (let i = start; i < end; i++) {
                                                            monthOptions.push(
                                                                <Select.Option key={i} value={i} className="month-item">
                                                                    {months[i]}
                                                                </Select.Option>
                                                            );
                                                        }
                                                        const year = value.year();
                                                        const month = value.month();
                                                        // console.log("check monthOptions:", months)
                                                        const options = [];
                                                        for (let i = year - 10; i < year + 10; i += 1) {
                                                            options.push(
                                                                <Select.Option key={i} value={i} className="year-item">
                                                                    {i}
                                                                </Select.Option>
                                                            );
                                                        }
                                                        return (
                                                            <div className="cele-wraper">
                                                                <Typography.Title level={5} className='cele-title' >Chọn một tháng</Typography.Title>
                                                                <Row gutter={8}>
                                                                    <Col>
                                                                        <Select
                                                                            className='cele-moth'
                                                                            popupMatchSelectWidth={false}
                                                                            value={month}
                                                                            onChange={(newMonth) => {
                                                                                const now = value.clone().month(newMonth);
                                                                                // setCurrentMonth(newMonth);
                                                                                onChange(now);
                                                                            }}
                                                                        >
                                                                            {monthOptions}
                                                                        </Select>
                                                                    </Col>
                                                                    <div className='cele-title-moth-container'>
                                                                        <div className='cele-wraper'>
                                                                            <Typography.Title level={5} className='cele-title-moth' >{months[month]}, {year}</Typography.Title>
                                                                        </div>
                                                                        <div className='cele-button'>
                                                                            <button className='cele-button-arrow' ><CaretLeft size={12} /></button>
                                                                            <button className='cele-button-arrow' ><CaretRight size={12} /></button>
                                                                        </div>
                                                                    </div>
                                                                </Row>
                                                            </div>
                                                        );
                                                    }}
                                                />
                                            </div>

                                        </div>

                                    </div>

                                    <div className='line'></div>

                                    <div className='time'>
                                        <div className='time-title'>
                                            <Typography.Title level={5} className='cele-title' >Thời gian mở vòng quay</Typography.Title>
                                        </div>
                                        <div className='time-main'>
                                            <Clock size={20} />
                                            <div className='main-start'>{valueStart}:00</div>
                                            <span>-</span>
                                            <div className='main-end'>{valueEnd}:00</div>
                                        </div>
                                        <div className='time-footer-main'>
                                            <div className='footer-left'>
                                                <ul>
                                                    {hoursStart.map((item, index) => {
                                                        return (
                                                            <li key={index} className={`left-item ${clickItemLeft && index === parseInt(valueStart, 10) ? 'item-active' : ''}`} onClick={() => handleClickStart(item)}>{item}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                            <div className='footer-right'>
                                                <ul>
                                                    {hoursEnd.map((item, index) => {
                                                        return (
                                                            <li key={index} className={`right-item ${clickItemRight && index === parseInt(valueEnd, 10) ? 'item-active' : ''}`} onClick={() => handleClickEnd(item)}>{item}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='time-switch'>
                                    <div className='time-switch-title'>Lặp lại</div>
                                    <Switch checked={onChecked} defaultChecked onClick={() => { handleChecked() }} />
                                </div>
                                <div className='time-footer'>
                                    <div className='change-wraper' onClick={() => { handleChangeSystemTime() }}>
                                        <ArrowClockwise size={15} color={'#fe7f56'} />
                                        <div className='change-save'>Sửa</div>
                                    </div>
                                    <div className='button-wraper' onClick={() => { handleSubmitSystemTime() }}>
                                        <FileText className='button-icon' size={15} color={'#fff'} />
                                        <div className='button-save'>Lưu</div>
                                    </div>
                                </div>
                            </div>




                            <div className='system-event'>
                                <h2 className='system-title'>Cài Đặt Sự Kiện</h2>
                                <p>Chọn phần thưởng</p>
                                <div className='system-body'>
                                    <div className='system-body-result'>
                                        <ul>
                                            {systemEvent.map((item, index) => {
                                                return (
                                                    <li className='body-result-element' key={index}>
                                                        <div className='result-start'>{item.text}</div>
                                                        <div className='result-end' onClick={() => handleInputCancel(index)}><X size={20} /></div>
                                                    </li>
                                                )

                                            })}


                                        </ul>
                                    </div>

                                </div>
                                <div className='system-body-add'>
                                    <div className='body-add-element'>
                                        <input className='result-start' value={gift} placeholder='Thêm giải thưởng' onChange={(e) => handleChangeSystemEvent(e.target.value)} />
                                        <div className='result-end' onClick={handleInputChange}><PlusCircle size={20} color={'#fe7f56'} /></div>
                                    </div>
                                </div>
                                <div className='system-body-option'>
                                    <p>Chủ đề</p>
                                    <div className='body-option-main'>
                                        <ul>
                                            {
                                                bannerOption.map((item, index) => {
                                                    return (

                                                        <li key={index} onClick={() => handleUploadBanner(item.name)}>
                                                            <img src={item.name} alt={item.alt} className='option-main-img' />
                                                        </li>
                                                    )
                                                })
                                            }

                                        </ul>
                                    </div>
                                </div>
                                <div className='system-footer'>
                                    <div className='system-footer-left'>
                                        <MutilButton />
                                        <div className='sort-wraper'>
                                            <ArrowsDownUp className='sort-icon' size={15} color={'#fe7f56'} />
                                            <div className='sort-save'>A-Z</div>
                                        </div>
                                    </div>
                                    <div className='system-footer-right'>
                                        <div className='change-wraper' onClick={() => { handleChangeSystemEventBeforSave() }}>
                                            <ArrowClockwise size={15} color={'#fe7f56'} />
                                            <div className='change-save'>Sửa</div>
                                        </div>
                                        <div className='button-wraper' onClick={() => { handleSubmitSystemEvent() }}>
                                            <FileText className='button-icon' size={15} color={'#fff'} />
                                            <div className='button-save'>Lưu</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='rotation-result'>
                            <h2 className='result-title'>Kết Quả</h2>
                            <div className='result-boddy'>
                                <ul>
                                    <li className='result-infor'>
                                        <div className='infor-decrip'>
                                            <Clipboard size={20} color={"rgb(0, 110, 255)"} />
                                            <p>Phạm vi số ngày bạn đang cài đặt</p>
                                        </div>
                                        {
                                            openResultSystemTime ?
                                                (<div className='infor-result'>
                                                    <div className='infor-wraper'>
                                                        <p>{numberDay} ngày</p>
                                                    </div>
                                                </div>) : <></>
                                        }
                                    </li>
                                    <li className='result-infor'>
                                        <div className='infor-decrip'>
                                            <Clipboard size={20} color={"rgb(0, 110, 255)"} />
                                            <p>Lặp lại các ngày sau đó ?</p>

                                        </div>
                                        {
                                            openResultSystemTime ?
                                                (<div className='infor-result'>
                                                    <div className='infor-wraper'>
                                                        <p>{valueChecked}</p>
                                                    </div>
                                                </div>) : <></>
                                        }

                                    </li><li className='result-infor'>
                                        <div className='infor-decrip'>
                                            <Clipboard size={20} color={"rgb(0, 110, 255)"} />
                                            <p>Tổng phần thưởng</p>

                                        </div>
                                        {
                                            openResultSystemEvent ?
                                                (<div className='infor-result'>
                                                    <div className='infor-wraper'>
                                                        <p>{systemEvent.length} Phần thưởng</p>
                                                    </div>

                                                </div>) : <></>
                                        }
                                    </li>
                                </ul>
                            </div>
                            <div className='result-footer'>
                                <div className='footer-start'>
                                    <Coin size={20} color="orange" />
                                    <p>Ngân sách khởi tạo sự kiện</p>
                                </div>
                                <div className='footer-end'>
                                    <Coin size={20} color="orange" />
                                    <p>FPOINT hiện có(9999)</p>
                                </div>
                            </div>
                            <div className='result-complete'>
                                <div className='result-complete-button'>
                                    <div className='cancel-wraper' onClick={handlePayCancel}>
                                        <div className='cancel-icon'>
                                            <ArrowClockwise size={22} color={"#fe7f56"} />
                                        </div>
                                        <h4 className='cancel-title'>Huỷ</h4>
                                    </div>
                                    <div className='button-end' onClick={handlePay}>
                                        <Pay />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </>) : <></>
            }
        </>

    );
};

export default EventRotation;