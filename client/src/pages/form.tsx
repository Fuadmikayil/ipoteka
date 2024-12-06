import React, { useEffect } from 'react'

import {useForm} from 'react-hook-form'

const Form = () => {

  const {watch, register, handleSubmit, formState: { errors } } = useForm()
  


  return (

    <form onSubmit={handleSubmit}
    action="" className='flex flex-col justify-center items-center h-screen gap-4  overflow-hidden relative' >
        <img className='absolute -z-10' src="https://www.rentvision.com/hubfs/How%20to%20Execute%20a%20Successful%20Apartment%20Lease-Up%20BG.png" alt="" />
        <h3 className='text-4xl font-bold tracking-wider text-cyan-500 mb-5'>Qeydiyyat</h3>
        <input className='px-4 text-md outline-none py-3 rounded-md shadow shadow-cyan-500 ' type="text" placeholder='Adınızı daxil edin' 
        id='name'
        {...register('name', {
          required: true,
          minLength: 4,
          maxLength: 16,
          pattern: /^[A-Za-z]+$/i,
        })}
        />
         {errors.name && errors.name.type === 'required' && (
            <span className="text-white">Ad hissəsini doldurun</span>
          )}

        <input  className='px-4 text-md outline-none py-3 rounded-md shadow shadow-cyan-500 ' type="password" placeholder='Parolu daxil edin' />
        <input  className='px-4 text-md outline-none py-3 rounded-md shadow shadow-cyan-500 ' type="password" placeholder='Parolu yeniden daxil edin' />
        <button className='shadow shadow-cyan-500 py-2 px-7 rounded-2xl bg-white text-cyan-900 mt-3'>Gönder</button>
    </form>
  )

}

export default Form