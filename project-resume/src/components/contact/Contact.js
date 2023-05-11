import React,{useState} from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="How to Contact Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
        </div>
      </div>
    </section>
  );
}

export default Contact