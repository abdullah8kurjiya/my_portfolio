// components
import Circles from '../../components/Circles';


// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const notify = () => {toast.success('Your Message has been sent. thank you for contacting ', {
    position: "bottom-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
    });};
  return (
    <div className='h-full bg-primary/30'>
        <Circles />
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            action='https://docs.google.com/forms/d/e/1FAIpQLSd-njHU_BrklgPGpEcNE7aD5v9YNy4fCtBiqqr4p6-Y-X-Epw/formResponse'
            method='post'
            target='response'
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='Name' className='input' name='entry.750194149' required/>
              <input type='email' placeholder='Email' className='input' name='entry.1882829588' required/>
            </div>
            <input type='text' placeholder='Subject' className='input' name='entry.1788472604' required/>
            <textarea placeholder='Message' className='textarea' name='entry.1199821347' required minLength={25}></textarea>
            <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
          <ToastContainer/>
          <iframe name='response' id='response' className='hidden' onLoad={()=>{
            notify();
            setTimeout(()=>window.location.reload(),4000);
            }}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
