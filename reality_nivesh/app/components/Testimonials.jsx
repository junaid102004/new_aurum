'use client';
import React, { useState, useEffect } from 'react';
import NewTestiminials from './icons/NewTestiminials';
import NewStar from './icons/NewStar';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Kalavati',
      rating: 5,
      occupation: 'Businesswoman',
      description:
        "Choosing this apartment was one of the best decisions I've made. The attention to detail in every corner is outstanding. From the spacious layout to the high-quality finishes, everything screams luxury. I feel truly at peace every time I step inside my home. It's more than just a house — it's a lifestyle."
    },
    {
      id: 2,
      name: 'Rohit Sharma',
      rating: 4,
      occupation: 'Software Engineer',
      description:
        "I spend long hours working remotely, so having a quiet and comfortable environment is a must. This property delivers exactly that. The natural lighting, calm surroundings, and modern interiors create the perfect balance of productivity and relaxation. I genuinely enjoy spending time here after work."
    },
    {
      id: 3,
      name: 'Ananya Mehra',
      rating: 5,
      occupation: 'Fashion Designer',
      description:
        "Being in the fashion industry, aesthetics matter to me — and this place completely aligns with my sense of style. The interiors are modern yet cozy, the layout is creative, and the view outside my window is breathtaking. I feel inspired every day just by being here. It's the ideal space for someone in a creative field."
    },
    {
      id: 4,
      name: 'Ajay Gupta',
      rating: 4,
      occupation: 'Bank Manager',
      description:
        "What impressed me most was the professionalism of the staff and the thoughtful planning of every feature. Whether it's the security system, parking, or the overall maintenance, everything is handled with efficiency. The location is also very strategic, giving me quick access to the city while still feeling tucked away in peace."
    },
    // {
    //   id: 5,
    //   name: 'Neha Kapoor',
    //   rating: 3,
    //   occupation: 'Photographer',
    //   description:
    //     "Lighting is everything to a photographer — and this place is bathed in natural light at all hours. The spacious rooms give me the flexibility to set up mini shoots at home, and the modern architecture makes every corner photo-worthy. It's truly a dream come true for any artist or creator looking for a home that matches their vibe."
    // }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [testimonials.length]);
console.log("active index",activeIndex);
  return (
    <div className="relative w-full h-[100vh] overflow-hidden mt-5">
      {/* 🔁 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/testimonalbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 💬 Foreground Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        <h1 className='text-center text-white text-[40px] font-["Supera"] w-full uppercase'>
          Testimonials
        </h1>

        <div className='w-full flex justify-between items-center mt-5'>
          {/* Left: List of Names */}
          <div className='flex w-[50%] flex-col gap-4 justify-center items-center pl-[50px] mt-10'>
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className={`rounded-md w-[320px] h-[100px] cursor-pointer border border-white/60 backdrop-blur-sm p-4 flex items-center gap-4 transition-all duration-300 ${
                  activeIndex === index ? 'bg-white/80' : 'bg-white/20'
                }`}
              >
                <img src="/uploads/user.png" alt="User" className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className={`text-lg font-bold ${activeIndex === index ? 'text-black' : 'text-white'}`}>
                    {item.name}
                  </h3>
                  <p className={`${activeIndex === index ? 'text-black/70' : 'text-white opacity-80'} text-sm`}>
                    {item.occupation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Current Testimonial */}
          <div className='w-[50%] flex flex-col p-[50px]'>
            <div className='flex w-full justify-center mb-5'>
              <NewTestiminials />
            </div>
            <p className='text-center w-full text-white text-[18px]'>
              {testimonials[activeIndex].description}
            </p>
            <div className='w-full justify-start gap-2 p-3 flex'>
          
            {Array.from({ length: testimonials[activeIndex].rating }, (_, i) => (
            <NewStar key={i} />
          ))}
            </div>
            
          </div>
        </div>
      </div>

      {/* Optional overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-5" />
    </div>
  );
};

export default Testimonials;
