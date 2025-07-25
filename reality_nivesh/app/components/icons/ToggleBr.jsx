import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import MobileNavbar from '../MobileNavbar';

const ToggleBar = ({ isOpen, setIsOpen, expandable, setExpandable }) => {
    {
        isOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setIsOpen(false)} // click on overlay to close
            ></div>
        )
    }
    return (
        <div onClick={() => setExpandable(!expandable)}>
            {!expandable ? <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.14912 0.430664H17.7979C18.5749 0.430664 19.3201 0.739334 19.8696 1.28877C20.419 1.83821 20.7277 2.5834 20.7277 3.36042C20.7277 4.13745 20.419 4.88264 19.8696 5.43208C19.3201 5.98151 18.5749 6.29018 17.7979 6.29018H3.14912C2.3721 6.29018 1.6269 5.98151 1.07747 5.43208C0.528031 4.88264 0.21936 4.13745 0.21936 3.36042C0.21936 2.5834 0.528031 1.83821 1.07747 1.28877C1.6269 0.739334 2.3721 0.430664 3.14912 0.430664ZM3.14912 12.1497H38.3063C39.0833 12.1497 39.8285 12.4584 40.3779 13.0078C40.9273 13.5573 41.236 14.3024 41.236 15.0795C41.236 15.8565 40.9273 16.6017 40.3779 17.1511C39.8285 17.7006 39.0833 18.0092 38.3063 18.0092H3.14912C2.3721 18.0092 1.6269 17.7006 1.07747 17.1511C0.528031 16.6017 0.21936 15.8565 0.21936 15.0795C0.21936 14.3024 0.528031 13.5573 1.07747 13.0078C1.6269 12.4584 2.3721 12.1497 3.14912 12.1497Z" fill="white" />
                <path d="M18.628 23.869H3.97922C3.2022 23.869 2.457 24.1777 1.90756 24.7271C1.35813 25.2766 1.04946 26.0218 1.04946 26.7988C1.04946 27.5758 1.35813 28.321 1.90756 28.8705C2.457 29.4199 3.2022 29.7286 3.97922 29.7286H18.628C19.405 29.7286 20.1502 29.4199 20.6997 28.8705C21.2491 28.321 21.5578 27.5758 21.5578 26.7988C21.5578 26.0218 21.2491 25.2766 20.6997 24.7271C20.1502 24.1777 19.405 23.869 18.628 23.869Z" fill="white" />
            </svg> : <div className='relative '>
                <div className='absolute text-white text-[30px]  top-[-80px] left-0' onClick={() => { !expandable }}>
                    <CiCircleRemove />

                </div>

            </div>}

            <header>
                <div className="block lg:hidden">
                    <MobileNavbar />
                </div>
            </header>
        </div>
    )
}

export default ToggleBar