import {forwardRef} from 'react'

const About = forwardRef<HTMLDivElement>(( {} , ref) => {
    return (
        <div className='w-full min-h-screen h-full'>
        <div ref={ref} className="relative isolate overflow-hidden bg-gray-900 h-auto py-24 sm:py-32">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"></img>
            <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" ></div>
            </div>
            <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" ></div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Who are we?</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                    <a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>
                    <a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
                    <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
                </div>
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">Offices worldwide</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
                    </div>
                    <div className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">Full-time groomers</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">10+</dd>
                    </div>
                    <div className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">Hours per week</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
                    </div>
                </dl>
                </div>
            </div>
        </div>
        <div className="bg-gray-100 py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    <li>
                        <div className="flex items-center gap-x-6">
                        <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                        <img className="h-16 w-16 rounded-full object-cover" src="data:image/jpeg;base64,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" alt=""></img>
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Raymond Bautista</h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">Veterenarian</p>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                        <img className="h-16 w-16 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgHeApCzeBCqUQydV7IgGFmjZru0VIxJn7nB-MWB5RoNdPES7foHvEjkXii-9IWSHLxQ&usqp=CAU" alt=""></img>
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Jonathan Delacruz</h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">Dog Groomer</p>
                        </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
})

export default About