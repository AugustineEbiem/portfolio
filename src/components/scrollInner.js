import React, { useState, useEffect } from 'react';
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const ScrollInner = ({setReachBottom}) => {

    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        setReachBottom(scrollTop)

        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollTop]);

    return (
        <div className="pMW">
            {/* {console.log(scrollTop)} */}
            <div 
                className="pMs"
                style={{ height: `${scrollTop}%` }}
            >
                <RightArrow />
            </div>
        </div>
    )
}

export default ScrollInner