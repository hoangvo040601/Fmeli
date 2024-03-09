import React, { useEffect, useRef, useState } from 'react';
import './Rotation.scss';

const Rotation = (props) => {
    const { systemEvent } = props;
    const wheelRef = useRef(null);
    const [isRotating, setIsRotating] = useState(false);
    const [showMsg, setShowMsg] = useState('');
    const [listGift, setListGift] = useState([]);
    const [triggerRotation, setTriggerRotation] = useState(false);

    const timeRotate = 7000; // 7 giây
    let currentRotate = 0;

    // console.log("check Gift:",listGift )
    useEffect(() => {
        setListGift(systemEvent);
    }, [systemEvent]);
    // console.log("check isRotating:",isRotating )

    const size = listGift.length;
    const rotate = 360 / size;
    const skewY = 90 - rotate;
    const renderListGift = () => {
        return listGift.map((item, index) => (
            <li key={index} style={{ transform: `rotate(${rotate * index}deg) skewY(-${skewY}deg)` }}>
                <p style={{ transform: `skewY(${skewY}deg) rotate(${rotate / 2}deg)` }} className={`text text-${index % 2 === 0 ? '1' : '2'}`}>
                    <b>{item.text}</b>
                </p>
            </li>
        ));
    };
    useEffect(() => {
        if (triggerRotation) {
            const random = Math.random();
            const gift = getGift(random);
            if (gift) {
                currentRotate += 360 * 10;
                rotateWheel(currentRotate, gift.index);
                showGift(gift);
            } else {
                console.error("No gift found for the given random number.");
            }
            setTriggerRotation(false); // Reset triggerRotation
        }
    }, [triggerRotation]);


    const start = () => {
        setShowMsg('');
        setIsRotating(true);
        setTriggerRotation(true);
        currentRotate = 0;
    };

    const getGift = randomNumber => {
        let currentPercent = 0;
        let list = [];
        listGift.forEach((item, index) => {
            currentPercent += item.percent;
            if (randomNumber <= currentPercent) {
                list.push({ ...item, index });
            }
        });
        return list[0];
    };
    const rotateWheel = (currentRotate, index) => {
        wheelRef.current.style.transform = `rotate(${currentRotate - index * rotate - rotate / 2}deg)`;
    };



    const showGift = gift => {
        setTimeout(() => {
            setIsRotating(false);
            setShowMsg(`Chúc mừng bạn đã nhận được "${gift.text}"`);

        }, timeRotate);
    };

    return (
        <div className='rotation-container-wraper'>
            <section className="main">
                <span>
                    <ul className="wheel" ref={wheelRef}>
                        {renderListGift()}
                    </ul>
                </span>
                <button className="btn--wheel" onClick={() => { start() }} disabled={isRotating}>Quay</button>
            </section>
            {/* <h1 className="msg">{showMsg}</h1> */}
        </div>
    );
};

export default Rotation;
