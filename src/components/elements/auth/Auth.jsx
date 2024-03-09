import React from 'react';
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Coin, CurrencyDollar } from "@phosphor-icons/react";
import "./Auth.scss"
const Auth = () => {
    return (
        <div className='auth-container'>
            <div className='point'>
                <div className='f-point'>
                    <Coin className='point-coin' size={22} color={"orange"} />
                    <span>FPOINT (9999)</span>
                </div> <br />

                <div className='vnd-point'>
                    <CurrencyDollar className='vnd-coin' size={22} color={"orange"} />
                    <span>VNĐ (9.999.999)</span>
                </div>
            </div>
            <div className='avatar'>
                <Avatar
                    size="large"
                    icon={<UserOutlined />}
                    style={{ backgroundColor: '#fe7f56', color: 'white' }} />
            </div>
        </div>
    );
};

export default Auth;