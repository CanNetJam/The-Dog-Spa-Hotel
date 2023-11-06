import {forwardRef} from 'react'

const Service = forwardRef<HTMLDivElement>(( {} , ref) => {
    return (
        <>
        <div ref={ref} className="min-h-screen h-auto py-8 sm:py-20 md:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Treat your pets</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Everything that your pet needs</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div className="relative pl-16 md:pl-24">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex md:h-20 md:w-20 h-10 w-10 items-center justify-center">
                            <img className='rounded-lg' src="./src/assets/icons/icons8-pet-50.png"></img>
                        </div>
                        High Quality Services
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</dd>
                    </div>
                    <div className="relative pl-16 md:pl-24">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex md:h-20 md:w-20 h-10 w-10 items-center justify-center">
                            <img className='rounded-lg' src="./src/assets/icons/icons8-products-50.png"></img>
                        </div>
                        Up to date Products
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.</dd>
                    </div>
                    <div className="relative pl-16 md:pl-24">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex md:h-20 md:w-20 h-10 w-10 items-center justify-center">
                            <img className='rounded-lg' src="./src/assets/icons/icons8-pet-heart-50.png"></img>
                        </div>
                        Comfortable Facilities
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.</dd>
                    </div>
                    <div className="relative pl-16 md:pl-24">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex md:h-20 md:w-20 h-10 w-10 items-center justify-center">
                            <img className='rounded-lg' src="./src/assets/icons/icons8-money-50.png"></img>
                        </div>
                        Affordable Pricing
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</dd>
                    </div>
                </dl>
                </div>
            </div>
            <div className="bg-white py-6 sm:py-8">
                <div className="mx-auto max-w-7xl px-2 lg:px-4">
                    <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48"></img>
                    <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48"></img>
                    <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48"></img>
                    <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48"></img>
                    <img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48"></img>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
})

export default Service