import { LuScissors } from "react-icons/lu";
import { MdOutlinePets } from "react-icons/md";
import { FaShower } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

export default function Products() {
    return (
        <>
            <div className="min-h-screen h-auto w-full items-center lg:p-28 py-16 px-6 bg-gradient-to-r from-blue-600 to-yellow-200">
                <div className="container mx-auto h-auto bg-white lg:flex sm:grid sm:grid-cols-2 grid">

                    <div className="grid h-full w-full">
                        <div className="h-[40vh] w-full sm:p-12 pt-8 px-8">
                            <span><LuScissors className="flex justify-center h-16 w-16 bg-yellow-200 p-3 rounded-full" /></span>
                            <h3 className="py-4 font-bold lg:text-4xl text-2xl">Dog Hair Trim</h3>
                            <p className="lg:text-lg text-sm">Pariatur culpa in deserunt nisi sit fugiat nostrud et voluptate aliqua. Exercitation nostrud sit ut officia velit dolor eu quis aliqua aute. </p>
                        </div>
                        <div className="h-[40vh] w-full flex">
                            <img className='w-full object-cover' src="./src/assets/dog-trim.jpg"></img>
                        </div>
                    </div>

                    <div className="flex sm:flex-col-reverse flex-col h-full w-full">
                        <div className="h-[40vh] sm:p-12 pt-8 px-8">
                            <span><MdOutlinePets className="flex justify-center h-16 w-16 bg-yellow-200 p-3 rounded-full" /></span>
                            <h3 className="py-4 font-bold lg:text-4xl text-2xl">Dog Hotel</h3>
                            <p className="lg:text-lg text-sm">Elit tempor in fugiat esse pariatur nulla ut anim enim culpa aute labore adipisicing laborum. Cillum excepteur deserunt ullamco minim sunt non quis commodo in. </p>
                        </div>
                        <div className="h-[40vh] w-full flex">
                            <img className='w-full object-cover' src="./src/assets/dog-house.jpg"></img>
                        </div>
                    </div>

                    <div className="grid h-full w-full">
                        <div className="h-[40vh] sm:p-12 pt-8 px-8">
                            <FaShower className="flex justify-center h-16 w-16 bg-yellow-200 p-3 rounded-full" />
                            <h3 className="py-4 font-bold lg:text-4xl text-2xl">Dog Bath</h3>
                            <p className="lg:text-lg text-sm">Sit ullamco commodo deserunt pariatur excepteur ut occaecat reprehenderit ea laboris est. Occaecat nisi incididunt mollit eu deserunt. </p>
                        </div>
                        <div className="h-[40vh] w-full flex">
                            <img className='w-full object-cover' src="./src/assets/dog-bath.jpg"></img>
                        </div>
                    </div>

                    <div className="flex sm:flex-col-reverse flex-col w-full h-full">
                        <div className="h-[40vh] sm:p-12 pt-8 px-8">
                            <TbTruckDelivery className="flex justify-center h-16 w-16 bg-yellow-200 p-3 rounded-full" />
                            <h3 className="py-4 font-bold lg:text-4xl text-2xl">Dog Products</h3>
                            <p className="lg:text-lg text-sm">Eu veniam velit irure velit incididunt mollit eu voluptate commodo pariatur. Non nisi consequat ut elit.</p>
                        </div>
                        <div className="h-[40vh] w-full flex">
                            <img className='w-full object-cover' src="./src/assets/dog-products.jpg"></img>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}