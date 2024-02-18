'use client';
import React from 'react'
import { motion } from "framer-motion";
import FormInput from '@/app/form/forminput'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alert from '@/app/alerts/alert'
import { useDarkMode } from '../darkmode/darkmodecontext';
import Image from 'next/image';
//Images 
import CardImage from '../../../public/images/form/card.png'
import Location from '../../../public/images/form/location.png'
import Phone from '../../../public/images/form/phone.png'
export default function Form() {
    const [isAlertVisible, setAlertVisible] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState("")
    const [alertType, setAlertType] = React.useState("")
    const { darkMode } = useDarkMode()
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phone: Yup.string().matches(/^\d{10}$/, "Phone number must consist of digits only and have a length of 10 characters").required('Phone number is required'),
        message: Yup.string().max(200, 'Must be 200 characters or less').required('Message is required'),
    });

    const formik = useFormik({
        validationSchema,
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        },
        onSubmit: data => {
            fetch('/api/formdata', {
                method: 'POST',
                credentials: "include",
                body: JSON.stringify(data)
            })
                .then((res) => res.json())
                .then((data) => {
                    setAlertVisible(true)
                    if (data.status === 200) {
                        setAlertMessage(data.message)
                        setAlertType("success")
                        formik.resetForm();
                    }
                    else {
                        setAlertMessage(data.message)
                        setAlertType("error")
                    }
                });
        },
    });
    return (
        <div id="form" className={`flex justify-center items-center flex-col ${darkMode ? "bg-secondary text-secondary" : "bg-primary text-primary "}`} >
            <div className='w-5/6 mt-10 '>
                <h1 className={`z-10 font-bold text-4xl tracking-tight ${darkMode ? "text-secondary" : "text-primary"} text-left `}> Start Your Project</h1>
                <p className='text-left md:center-left mb-12 max-lg:mt-5 '>Unleash your creativity on the canvas of your skin. Fill out the form, and together, we&apos;ll create a tattoo that embodies your style, passions, and personal narrative.</p>
            </div>
            <div className='flex w-full h-auto justify-center'>
                <div className={`grid lg:grid-cols-2 w-5/6 shadow-xl rounded-3xl ${darkMode && "shadow-slate-600 shadow-md"} `}>
                    <div className='flex relative justify-center items-center h-[30vh] md:h-full'>

                        <div className={`w-3/4 lg:w-1/2 h-1/2 flex absolute z-20 text-primary justify-center flex-col text-xs md:text-md `}>

                            <p className='pl-4 font-bold text-lg'>New York</p>
                            <div className='flex'>
                                <Image
                                    className='w-10 h-auto'
                                    src={Location}
                                    alt="location-icon"
                                    width="500"
                                    height="500"
                                />

                                <p className='flex items-center'>143 N 4th St, Brooklyn, NY 11211</p>

                            </div>
                            <div className='flex'>
                                <Image
                                    className='w-10 p-2 h-auto'
                                    src={Phone}
                                    alt="phone-icon"
                                    width="500"
                                    height="500"
                                />
                                <p className='flex items-center'>646-577-2246</p>
                            </div>

                            <p className='pl-4 font-bold text-lg'>Florida</p>

                            <div className='flex'>
                                <Image
                                    className='w-10 h-auto '
                                    src={Location}
                                    alt="location-icon"
                                    width="500"
                                    height="500"
                                />
                                <p className='flex items-center'>  3145 NE 9th St, Fort Lauderdale, FL 33304</p>

                            </div>
                            <div className='flex'>
                                <Image
                                    className='w-10 p-2 h-auto'
                                    src={Phone}
                                    alt="phone-icon"
                                    width="500"
                                    height="500"
                                />
                                <p className='flex items-center'>646-577-2246</p>
                            </div>

                        </div>
                        <div className='absolute z-10 bg-black/50 w-full h-full rounded-tl-3xl    rounded-tr-3xl lg:rounded-bl-3xl '></div>

                        <div className=' h-full w-full'>
                            <Image
                                className='w-full h-full rounded-tl-3xl lg:rounded-bl-3xl'
                                src={CardImage}
                                alt="card-image"
                                sizes='1'
                            />
                        </div>
                    </div>
                    <form
                        className='flex flex-center flex-col justify-center items-center lg:mr-10 pb-4 mt-8'
                        onSubmit={formik.handleSubmit}>

                        <div className='w-5/6 lg:rounded-tr-3xl lg:rounded-br-3xl'>
                            <FormInput
                                type="text"
                                placeholder="First Name"
                                onChange={formik.handleChange}
                                id="firstName"
                                name="firstName"
                                value={formik.values.firstName}
                            />
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div className='h-auto text-red-600' >
                                    {formik.errors.firstName}
                                </div>
                            ) : (
                                <div style={{ visibility: 'hidden' }}></div>
                            )}
                            <FormInput
                                type="text"
                                placeholder="Last Name"
                                onChange={formik.handleChange}
                                id="lastName"
                                name="lastName"
                                value={formik.values.lastName}
                            />
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div className='h-auto text-red-600' >
                                    {formik.errors.lastName}
                                </div>
                            ) : (
                                <div style={{ visibility: 'hidden' }}></div>
                            )}
                            <FormInput
                                type="text"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                id="email"
                                name="email"
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className='h-auto text-red-600' >
                                    {formik.errors.email}
                                </div>
                            ) : (
                                <div style={{ visibility: 'hidden' }}></div>
                            )}
                            <FormInput
                                type="tel"
                                placeholder="Phone"
                                onChange={formik.handleChange}
                                id="phone"
                                name="phone"
                                value={formik.values.phone}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className='h-auto text-red-600' >
                                    {formik.errors.phone}
                                </div>
                            ) : (
                                <div style={{ visibility: 'hidden' }}></div>
                            )}
                            <textarea
                                id="message"
                                name="message"
                                rows={3}
                                className="w-full h-48 text-black text-md rounded-lg pt-4 pl-4 pr-12 mt-2 border-2 block py-1.5 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                placeholder='How can I help?'
                            />

                            {formik.touched.message && formik.errors.message ? (
                                <div className=' text-red-600' >
                                    {formik.errors.message}
                                </div>
                            ) : (
                                <div style={{ visibility: 'hidden' }}></div>
                            )}
                            <motion.button
                                className="font-bold w-full text-black h-14 rounded-md mb-8 mt-10 bg-main"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.8 }}
                                type='submit'
                            >
                                Submit
                            </motion.button>
                        </div>
                        <div className='center bottom-10'>
                            {isAlertVisible &&
                                <Alert
                                    type={alertType}
                                    message={alertMessage}
                                />}
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}


