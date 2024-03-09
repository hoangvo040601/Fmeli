import { ClipboardText, Funnel, Gift, MagnifyingGlass, Money, Plus, Trash } from '@phosphor-icons/react';
import { Table } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import ecoin from "../../../../../assets/coin.png"
import mas from "../../../../../assets/mastercard.svg"
import vqimage from "../../../../../assets/vong-quay.jpeg"
import './EventPay.scss'

const EventPay = ({ children, ...props }) => {
    const { openPay, setOpenContent, setOpenPay } = props;
    const [selectionType, setSelectionType] = useState("checkbox");
    const [selectedRows, setSelectedRows] = useState([]);
    useEffect(() => {
        // Cuộn nội dung lên đầu trang khi state thay đổi
        document.body.scrollIntoView({ behavior: 'smooth' });
      }, [openPay]);


    const [tableData, setTableData] = useState([
        {
            key: "1",
            name: vqimage,
            descriptions: {
                titleDes:
                    "Vòng quay vô cực",
                detail: {
                    description:
                        "Thoải mái tuỳ chỉnh yêu cầu và phần thưởng Vòng Quay Vô Cực",
                    status: "suscess",
                },
            },
            time: {
                from: "Sep 01, 2024",
                to: "Sep 02, 2004",
            },
            roleEvent: {
                detail: {},
            },
            prize: "3000 F",
            cancel: <Trash size={15} color="red" onClick={() => handleCancel("1")} className="btn-trash" />,
        },
    ]);

    const handleCancel = (key) => {
        const newData = tableData.filter((item) => item.key !== key);
        setTableData(newData);
    };
    const handleSelectionChange = (selectedRowKeys, selectedRows) => {
        // Cập nhật danh sách các hàng được chọn
        setSelectedRows(selectedRows);
        console.log("check select:", selectedRows)
      };

    const columns = [
        {
            title: "Sự kiện",
            dataIndex: "name",
            render: (name) => <img src={name} alt="Sự kiện" className="img-pay" />,
        },
        {
            title: "Chi tiết",
            dataIndex: "descriptions",
            render: (descriptions) => (
                <>
                    <h3 className="title-des">{descriptions.titleDes}</h3>
                    <a href="#" className='btn-detail'>Detail</a>
                </>
            ),
        },
        {
            title: "Thời gian diễn ra",
            dataIndex: "time",
            render: (time) => (
                <>
                    <h3 className="title-des">From: {time.from}</h3>
                    <h3 className="title-des">To: {time.to}</h3>
                </>
            ),
        },
        {
            title: "Điều kiện nhận thưởng",
            dataIndex: "roleEvent",
            render: (roleEvent) => <a href="#" className='btn-detail'>Detail</a>,
        },
        {
            title: "Chi phí",
            dataIndex: "prize",
        },
        {
            title: "Huỷ",
            dataIndex: "cancel",
        },
    ];


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
        );
    },
    // getCheckboxProps: (record) => ({
    //   disabled: record.name === "Disabled User",
    //   // Column configuration not to be checked
    //   name: record.name,
    // }),
};
const handleAddEvent = () => {
    setOpenContent(true);
    setOpenPay(false);
}
return (
    <>
        {openPay ? (<>
            {children}
            < div className='eventpay-container-wraper' >
                <div className='eventpay-container'>
                    <div className='evenpay-header'>
                        <h2 className='header-title'>Chờ thanh toán</h2>
                        <div className='header-addevent'>
                            <div className='addevent-search'>
                                <input type="text" className='search-input' />
                                <div className='search-icon'>
                                    <MagnifyingGlass size={22} color={"rgb(141, 139, 139)"} />
                                </div>
                                <div className='filter-icon'>
                                    <Funnel size={22} color={"rgb(141, 139, 139)"} />
                                </div>
                            </div>
                            <div className='addevent-add' onClick={handleAddEvent}>
                                <div><Plus size={20} color={"#fff"} /></div>
                                <div className='add-title'>Thêm sự kiện</div>
                            </div>
                        </div>
                    </div>

                    <div className='evenpay-body'>

                        <Table
                            rowSelection={{
                                type: selectionType,
                                ...rowSelection,
                                type: "checkbox",
                                hideSelectAll: true,
                                onChange: handleSelectionChange,
                            }}
                            columns={columns}
                            dataSource={tableData}
                            pagination={false}
                            
                        />
                    </div>
                    <div className='evenpay-footer'>
                        <div className='footer-number'>{selectedRows.length} items</div>
                        <h3 className='footer-sum'>Tổng: 3000 FPOINT</h3>
                    </div>
                </div>

                <div className='evenpay-complete-wraper'>
                    <div className='evenpay-complete'>
                        <div className='complete-header'>
                            <Money size={22} color="orange" />
                            <h3 className='header-title'>Phương Thức Thanh Toán</h3>
                        </div>
                        <div className='complete-descrip'>Thay đổi phương thức thanh toán</div>
                        <div className='complete-checkcoin'>
                            <div className='checkcoin-e-wraper'>
                                <div className='checkcoin-icon'>
                                    <img src={ecoin} alt="icon-coin" className='icon-e' />
                                    <div className='icon-name'>FPOINT</div>
                                </div>
                                <div className='checkcoin-cap'>
                                    9999*****23 FPOINT
                                </div>
                            </div>
                            <div className='divier'></div>
                            <div className='checkcoin-m-wraper'>
                                <div className='checkcoin-icon-m'>
                                    <img src={mas} alt="mastercard" className='icon-m' />
                                    <div className='icon-m-name'>Mastercard</div>
                                </div>
                                <div className='checkcoin-m-cap'>
                                    7987*****2342
                                </div>
                            </div>
                        </div>
                        <div className='complete-voucher-title'>
                            <div className='voucher-title-icon'>
                                <Gift size={22} color="orange" />
                            </div>
                            <div className='voucher-title-name'>Voucher</div>
                        </div>
                        <div className='complete-voucher-boddy'>
                            <div className='voucher-body-apply'>Apply</div>
                            <div className='voucher-body-input'>15% off</div>
                        </div>
                        <div className='complete-voucher-footer'>
                            <div className='voucher-footer'>15% off</div>
                        </div>
                        <div className='complete-sum-title'>
                            <div className='sum-title-icon'>
                                <ClipboardText size={22} color="orange" />
                            </div>
                            <div className='sum-title-name'>Summary</div>
                        </div>
                        <div className='complete-sum-cost'>
                            <div className='sum-cost-name'>Chi Phí</div>
                            <div className='sum-cost-price'>10.000.000</div>
                        </div>
                        <div className='complete-sum-decrease'>
                            <div className='sum-decrease-name'>Giảm Giá</div>
                            <div className='sum-decrease-price'>-15%</div>

                        </div>
                        <div className='complete-sum-vat'>
                            <div className='sum-vat-name'>VAT</div>
                            <div className='sum-vat-price'>10%</div>
                        </div>
                        <div className='divier'></div>
                        <div className='complete-sum-complete'>
                            <div className='sum-complete-name'>Tổng</div>
                            <h4 className='sum-complete-price'>9000000</h4>
                        </div>
                        <div className='complete-cost-button'>
                            <div className='button-cancel'>Huỷ</div>
                            <div className='button-complete'>Xác Nhận</div>
                        </div>
                    </div>
                </div>
            </div>
        </>) : <></>}
    </>
);
};

export default EventPay;