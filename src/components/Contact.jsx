import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { slideIn } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { EarthCanvas } from './canvas';


///template_fg84kbf
///service_dgr2wng
///QSuN4C297S5q2dnq4

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.send('service_dgr2wng', 'template_fg84kbf',
    {
      from_name: form.name,
      to_name:"Vinícius",
      from_email:form.email,
      to_email:'vinicius.omena@fis.ufal.br',
      message: form.message,
    },'QSuN4C297S5q2dnq4'
    ).then(() => {
      alert("Obrigado! Em breve entrarei em contato com você")
      setLoading(false)
      setForm({
        name:'',
        email:'',
        message:'',
      })
    }, (err) => {
      console.log(err)
      setLoading(false)
      alert("Ocorreu um erro com sua mensagem")
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>

      <motion.div
        variants={slideIn('left','tween', 0.2,1 )}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit rounded-xl text-white font-bold shadow-md shadow-primary'
          >
            {loading ? 'Sending...':'Send'}
          </button>

        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right','tween', 0.2,1 )}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")