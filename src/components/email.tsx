import {forwardRef} from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";

const Email = forwardRef<HTMLDivElement>(( {} , ref) => {
    return (
        <div className='min-h-screen h-auto w-full'>
            <div ref={ref} className='sm:h-[70%] h-auto w-full grid bg-gray-200 items-center'>
                <div className='container mx-auto lg:flex grid gap-y-10 lg:pt-20 sm:pt-8 py-8 lg:px-10 sm:px-6 px-6 rounded-lg'>
                    <div className='w-full'>
                        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6x1 py-6">Lets get in touch</h1>
                        <p className='font-bold max-w-[50%]'>Call/Text: 0912735657<br/>
                        You can also visit us directly on: <br/>
                        Shop 9 Unitop Mall Dasmariñas Cavite Governor's Drive, Paliparan - Silang Rd, Dasmariñas, 4114 Cavite</p>
                        <br/>
                        <div className=''>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.4243053793894!2d120.98473167578564!3d14.286762084681857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d72987328835%3A0x5420ff572ed4c374!2sThe%20Dog%20Spa%20%26%20Hotel%20Dasmari%C3%B1as%20Cavite!5e0!3m2!1sen!2sph!4v1698903287547!5m2!1sen!2sph" className='w-full sm:w-[400px]' height="300" loading="lazy"></iframe>    
                        </div>
                    </div>
                    <div className="h-full w-full bg-white sm:pt-8 py-10 sm:px-10 rounded-md px-6 grid">
                        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                            <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#facc15] to-[#2563eb] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" ></div>
                        </div>
                        <div className="mx-automax-w-2xl text-center">
                            <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">We would like to hear from you, write an email for us.</h2>
                            <p className="mt-2 text-lg leading-8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
                        </div>
                        <form action="#" method="POST" className="mx-auto mt-4max-w-xl sm:mt-8 w-full">
                            <div className="grid grid-cols-1 gap-x-2 gap-y-2 lg:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-4 text-gray-900">First name</label>
                                    <div className="mt-2.5">
                                    <input type="text" name="first-name" id="first-name"  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-4 text-gray-900">Last name</label>
                                    <div className="mt-2.5">
                                    <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-4 text-gray-900">Email</label>
                                    <div className="mt-2.5">
                                    <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-4 text-gray-900">Phone number</label>
                                    <div className="relative mt-2.5">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label htmlFor="country" className="sr-only">Country</label>
                                        <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                        <option>US</option>
                                        <option>CA</option>
                                        <option>EU</option>
                                        </select>
                                        <svg className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                    <div className="mt-2.5">
                                    <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                </div>
                                <div className="flex gap-x-4 sm:col-span-2">
                                    <div className="flex h-6 items-center">
                                    <button type="button" className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                                        <span className="sr-only">Agree to policies</span>
                                        <span aria-hidden="true" className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                                    </button>
                                    </div>
                                    <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                                    By selecting this, you agree to our
                                    <a href="#" className="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
                                    </label>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-center">
                                <button type="submit" className="h-button">Submit</button>
                            </div>
                        </form>
                        </div>
                    </div>
            </div>

            <div className="sm:h-[30%] h-auto w-full text-gray-200 bg-slate-900 flex flex-col-reverse sm:px-20 px-8">
                <div className="h-full w-full border-t flex place-items-center justify-center py-6">
                    <div>
                        <ul className="flex gap-5 py-2 justify-center">
                            <li><FaFacebookF className="flex justify-center cursor-pointer items-center h-8 w-8 border p-2 rounded-full" /></li>
                            <li><FaTwitter className="flex justify-center cursor-pointer items-center h-8 w-8 border p-2 rounded-full" /></li>
                            <li><FaInstagram className="flex justify-center cursor-pointer items-center h-8 w-8 border p-2 rounded-full" /></li>
                            <li><FaTiktok className="flex justify-center cursor-pointer items-center h-8 w-8 border p-2 rounded-full" /></li>
                        </ul>
                        <p>© 2023 The Dog Spa & Hotel. All rights reserved.</p>
                    </div>
                </div>
                <div className="h-full w-full grid sm:grid-cols-3 grid-cols-1 py-8">
                    <div className="sm:col-span-1 ">
                        <a><img className="h-12 w-12 rounded-full" src="./src/assets/logo.jpg"></img></a>
                        <p className="font-bold text-2xl py-5">Dogs are man's best friend.</p>
                    </div>
                    <div className="sm:col-span-2 grid grid-cols-3">
                        <nav>
                            <label className="font-bold text-lg">Services</label>
                            <div className="text-base pt-1 cursor-pointer text-gray-400 hover:text-slate-100">Pricing</div>
                            <div className="text-base pt-1 cursor-pointer text-gray-400 hover:text-slate-100">Guides</div>
                            <div className="text-base pt-1 cursor-pointer text-gray-400 hover:text-slate-100">Support</div>
                        </nav>
                        <nav>
                            <label className="font-bold text-lg">Company</label>
                            <div className="text-base pt-1 cursor-pointer text-gray-400 hover:text-slate-100">About</div>
                            <div className="text-base pt-1 cursor-pointer text-gray-400 hover:text-slate-100">Partners</div>
                            <div className="text-base pt-1 cursor-pointer text-gray-400 hover:text-slate-100">Blog</div>
                        </nav>
                        <nav>
                            <label className="font-bold text-lg">Legal</label>
                            <div className="text-base pt-1 cursor-pointer text-gray-400 hover:text-slate-100">Claim</div>
                            <div className="text-base pt-1 cursor-pointer text-gray-400 hover:text-slate-100">Privacy</div>
                            <div className="text-base pt-1 cursor-pointer text-gray-400 hover:text-slate-100">Terms</div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Email

//bg-[linear-gradient(to_right,rgba(37,99,235,0.8),rgba(255,255,255,1)),url(/src/assets/contact1.jpg)]