import axios from 'axios'
import React, { useEffect, useState } from 'react'

import {useForm} from 'react-hook-form'

const Hero = () => {
    const [data, setData] = useState([]);
    const {watch, register, handleSubmit, formState: { errors } } = useForm()

    const MyData = async () => {
        const response = await axios.get("http://localhost:3000/homes");
        setData(response.data);
    }

    useEffect(() => {
        const fetchData = async () => {
            await MyData();
        }
        fetchData();
    }, []);

    return (
        <main>
            <section className='container flex gap-5 '>
                {data.map((item) => (
                    <div className='w-36 h-36 flex flex-col hover:scale-105 transition-all duration-500 shadow-md shadow-slate-300  cursor-pointer ' key={item.id}>
                        <img className='object-cover w-full h-full bg-red rounded-lg  )' src={item.img} alt="home" />
                        <p className='text-sm'>{item.OtaqSayı}-otaqlı {item.BinanınTipi} {item.Müddəti} {item.seher}</p>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default Hero;
