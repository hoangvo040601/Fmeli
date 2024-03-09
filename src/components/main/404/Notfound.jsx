import { Result } from 'antd';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Xin lỗi, trang hiện tại chưa có thông tin."
                extra={<Button type="primary">Back Home</Button>}
            />
        </div>
    );
};

export default NotFound;