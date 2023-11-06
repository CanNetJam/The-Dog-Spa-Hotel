import {forwardRef} from 'react'

const Reviews = forwardRef<HTMLDivElement>(( {} , ref) => {
    return (
        <>
        <div ref={ref} className="sm:min-h-screen sm:h-auto h-full w-full py-0 sm:pb-24">
            <div className="sm:h-[300px] h-[150px] w-full bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
            <br/>
            <div className="flex h-fit w-full justify-center text-center">
                <h2 className="font-bold p-10 sm:text-5xl text-4xl">What our customers say about us</h2>
            </div>
            <div className="lg:flex sm:grid-cols-2 sm:gap-y-10 grid container mx-auto h-fit w-full">
                <div className="sm:min-h-[300px] h-auto w-full px-10 py-16 sm:border-r-2 sm:border-b-0 border-b-2">
                    <div className="flex gap-5">
                        <div>
                            <img className='h-[50px] w-[50px]' src="https://lh3.googleusercontent.com/a/ACg8ocJlRZf9595O2-CCyQh3ZWYdbPY-Ca6fGSxzhQrcxutP=w36-h36-p-rp-mo-br100"></img>
                        </div>
                        <div>
                            <h4 className="font-bold text-[18px]">Lawrence Sabio</h4>
                            <img className='w-[125px]' src="https://img.freepik.com/premium-vector/five-star-rating-icon-rating-stars-vector-flat-stars-isolated_118339-1270.jpg"></img>
                        </div>
                    </div>
                    <br/>
                    <p>Ut nostrud veniam magna sint est in Lorem. Et velit elit labore est id sunt nulla voluptate eu. Deserunt tempor non sunt in ad consectetur veniam cillum mollit. Anim ad eu ad anim eiusmod labore ex.</p>
                </div>
                <div className="sm:min-h-[300px] h-auto w-full px-10 py-16 sm:border-r-2 sm:border-b-0 border-b-2">
                    <div className="flex gap-5">
                        <div >
                            <img className='h-[50px] w-[50px]' src="https://lh3.googleusercontent.com/a-/ALV-UjUVTW4L_El_MsGIWuvW5ve9dh-PcbNTp6_xFsOHiwg6gA=w36-h36-p-rp-mo-br100"></img>
                        </div>
                        <div>
                            <h4 className="font-bold text-[18px]">Lito Mendezabal</h4>
                            <img className='w-[125px]' src="https://img.freepik.com/premium-vector/five-star-rating-icon-rating-stars-vector-flat-stars-isolated_118339-1270.jpg"></img>
                        </div>
                    </div>
                    <br/>
                    <p>Voluptate fugiat duis eiusmod elit officia id eiusmod nisi tempor reprehenderit incididunt anim ipsum est. Lorem sit laborum in fugiat enim excepteur consequat consectetur aliqua exercitation nisi. Quis fugiat eu incididunt minim sunt. Enim eu aliquip proident reprehenderit fugiat duis magna magna consectetur. Pariatur velit proident ex in id proident labore labore anim ipsum occaecat commodo exercitation consequat.</p>
                </div>
                <div className="sm:min-h-[300px] h-auto w-full px-10 py-16 sm:border-r-2 sm:border-b-0 border-b-2">
                    <div className="flex gap-5">
                        <div>
                            <img className='h-[50px] w-[50px]' src="https://lh3.googleusercontent.com/a-/ALV-UjVZdHWqJmLEoEm4OcT22tjkV3cHj1BL1H9GFTOQBBpkdsg=w60-h60-p-rp-mo-ba2-br100"></img>
                        </div>
                        <div>
                            <h4 className="font-bold text-[18px]">Mikael Angelo Cano</h4>
                            <img className='w-[125px]' src="https://img.freepik.com/premium-vector/five-star-rating-icon-rating-stars-vector-flat-stars-isolated_118339-1270.jpg"></img>
                        </div>
                    </div>
                    <br/>
                    <p>Amet qui proident est dolor eiusmod dolor sit consequat quis excepteur eiusmod elit deserunt nisi. Ex occaecat Lorem veniam eu excepteur non. Laborum proident eiusmod exercitation deserunt.</p>
                </div>
            </div>
        </div>
        </>
    )
})

export default Reviews