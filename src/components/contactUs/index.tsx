import { SelectedPage } from '@/shared/types';
import React from 'react';
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import contact from "@/assets/contact.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const index = ({ setSelectedPage }: Props) => {
    const inputStyle = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm()

    const handleSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contactus" className='mx-auto w-5/6 pt-2 pb-32'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                <div className='md:w-3/5'>
                    <h1 className='text-primary-500'>JOIN NOW <span>TO GET IN SHAPE</span></h1>
                    <p className='my-5'>
                        Ultricies leo integer malesuada nunc vel risus. Duis at consectetur lorem donec massa sapien. 
                        Tincidunt ornare massa eget egestas purus viverra. Dignissim convallis aenean et tortor at risus. 
                        In ante metus dictum at tempor commodo ullamcorper a lacus. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. 
                    </p>
                </div>
                <div className='mt-10 justify-between gap-8 md:flex'>
                    <form 
                        target="_blank"
                        className='pt-24'
                        onSubmit={handleSubmit}
                        method="POST"
                        action="https://formsubmit.co/el/duxako"
                    >
                        <input 
                            className={inputStyle}
                            type="text"
                            placeholder='NAME'
                            {...register("name", {
                                required: true,
                                maxLength: 100
                            })}
                        />
                        {errors.name && (
                            <p className='mt-1 text-primary-500'>
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 characters."}
                            </p>
                        )}
                        <input 
                            className={inputStyle}
                            type="text"
                            placeholder='EMAIL'
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            })}
                        />
                        {errors.email && (
                            <p className='mt-1 text-primary-500'>
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Not a vaild email address"}
                            </p>
                        )}
                        <textarea 
                            className={inputStyle}
                            placeholder="MESSAGE"
                            rows={4}
                            cols={50}
                            {...register("message", {
                                required: true,
                                maxLength: 2000
                            })}
                        />
                        {errors.message && (
                            <p className='mt-1 text-primary-500'>
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length is 2.000 characters."}
                            </p>
                        )}
                        <button
                            type="submit"
                            className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                        >
                            SUBMIT
                        </button>
                    </form>
                    <div className='relative mt-5 basis-2/5'>
                        <img src={contact} />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default index