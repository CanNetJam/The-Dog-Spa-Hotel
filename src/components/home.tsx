import { forwardRef } from "react"

interface btnProps {
    handleClick5: (event: React.MouseEvent<HTMLButtonElement>)=> void
}

const Home = forwardRef<HTMLDivElement, btnProps>(({handleClick5} , ref) => {
    return (
        <div ref={ref} className="background">
            <div className='container mx-auto grid lg:flex min-h-screen h-auto w-screen items-center'>
                <div className='lg:h-[500px] md:h-[400px] sm:h-[300px] h-[250px] py-8 px-8 lg:px-12 lg:py-12 md:px-16 md:py-16 sm:px-16 sm:py-16 w-full lg:w-3/5 sm:text-left text-center grid'>
                    <div>
                        <h3 className='lg:text-8xl md:text-5xl sm:text-4xl text-3xl font-bold tracking-tight text-gray-900'>
                            Providing satisfaction for your pets!
                        </h3>
                        <br/>
                        <p className="md:text-[20px] sm:text-[16px] text-[12px]">
                            Qui est in quis nisi sunt consequat ipsum enim anim consectetur proident minim dolor. Quis dolor fugiat sit minim fugiat magna est consectetur do cillum consectetur. Exercitation reprehenderit mollit velit amet occaecat laborum cillum laboris ipsum.
                        </p>
                    </div>
                    <br/>
                    <div className='flex-initial sm:justify-center'>
                        <button onClick={handleClick5} className='h-button'>
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className='flex justify-center items-center lg:h-full md:h-[500px] sm:h-[375px] h-[300px] py-8 lg:py-40 w-full lg:w-2/5'>
                    <img className='h-full w-full md:rounded-full object-fill' src='./src/assets/dog3.jpg'></img>
                </div>
            </div>
        </div>
    )
})

export default Home