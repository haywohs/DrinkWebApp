import React from 'react'
import "./skeleton.scss"

const Skeleton = ({ type, length }) => {

    const number = length;
    const MenuSkeleton = ({ i }) => {
        return (
            <>
                <div className='itemSK' key={i}>
                    <div className='imgSK' />
                    <div className='nameSK' />
                </div>
            </>
        )
    };
    if (type === "menu") return Array(number).fill().map((item, i) => <MenuSkeleton key={i} />);
}

export default Skeleton;