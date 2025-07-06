"use client"


import React, { useState } from 'react';
import NewPlus from './icons/NewPlus';
import { FaMinus } from "react-icons/fa";

const faqData = [
    {
        id: 1,
        question: "What all property types are there in Sushma Elementa Kasauli Project?",
        answer: "The Sushma Elementa Kasauli Project offers 1 BHK, 2 BHK, and Studio Apartments designed with modern architecture and surrounded by scenic views."
    },
    {
        id: 2,
        question: "Is the property RERA approved?",
        answer: "Yes, the Sushma Elementa project is RERA approved ensuring transparency and buyer protection."
    },
    {
        id: 3,
        question: "Are there any amenities included?",
        answer: "Yes, the project includes amenities like a clubhouse, gym, landscaped gardens, indoor games, and a meditation area."
    },
    {
        id: 4,
        question: "How far is the nearest hospital and market?",
        answer: "The nearest hospital is about 4 km away and a local market is within 2 km radius, ensuring convenience for residents."
    },
    {
        id: 5,
        question: "What is the possession date of the project?",
        answer: "The expected possession date is December 2025, depending on construction progress."
    },
    {
        id: 6,
        question: "Is bank loan facility available?",
        answer: "Yes, the project is pre-approved by major banks like HDFC, ICICI, and SBI for easy home loan options."
    }
];

const Faq = () => {
    const [activeId, setActiveId] = useState(null);

    const toggleAnswer = (id) => {
        setActiveId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className='w-full bg-white h-auto flex p-[100px] flex-col'>
            <div className='flex w-full flex-col '>
                <h2 className='text-center teaxt-[25px] cmd:text-[50px]  w-full font-["Supera"] font-bold uppercase'>
                    Frequently asked questions
                </h2>

                {faqData.map((faq) => (
                    <div
                        key={faq.id}
                        className='w-full border-b border-[#D6D6D6] py-4 mt-6'
                    >
                        <div className='flex items-center  justify-between cursor-pointer' onClick={() => toggleAnswer(faq.id)}>
                            <p className='text-[20px] font-medium font-["Supera"] text-black'>{faq.question}</p>
                            {activeId === faq?.id
                                ? (
                                    <FaMinus />
                                ) : <NewPlus />
                            }

                        </div>

                        {activeId === faq.id && (
                            <div className='mt-5 font-["Supera"] font-medium text-[20px] text-gray-600'>
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
