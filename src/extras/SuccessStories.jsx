import { useState } from "react";

const SuccessStories = () => {
    const [cards,setCards]=useState([])
    fetch('http://localhost:5000/stories')
    .then(res=>res.json())
    .then(data=>setCards(data))
    return (
        <>
        <div>
        <h1 className="text-3xl font-bold text-center">Inspiring Stories from Our Volunteers</h1>
        <p className="py-3 text-gray-500 text-center">Showcase real-life stories or testimonials from past volunteers who have made an impact.</p>
        </div>
        <div className="grid px-8 md:px-16 gap-4 grid-cols-1 md:grid-cols-2 mb-10">
            
            {
                cards.map(card=><><div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex justify-center -mt-16 md:justify-end">
                        <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={card.photo}/>
                    </div>
                
                    <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{card.volunteerName}</h2>
                
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{card.shortExcerpt}</p>
                
                    <div className="flex justify-end mt-4">
                        <p href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" tabIndex={0} role="link">{card.location}</p>
                    </div>
                </div></>)
            }
        </div>
        </>
    );
};

export default SuccessStories;