import { useState, forwardRef } from "react"
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai";

const Questions = forwardRef<HTMLDivElement>(( {} , ref) => {
    const [question1, setQuestion1] = useState<boolean>(false)
    const [question2, setQuestion2] = useState<boolean>(false)
    const [question3, setQuestion3] = useState<boolean>(false)
    const [question4, setQuestion4] = useState<boolean>(false)
    const [question5, setQuestion5] = useState<boolean>(false)
    
    return (
        <>
            <div ref={ref} className="min-h-screen h-auto container mx-auto lg:py-28 md:py-12 sm:py-8 py-2 lg:flex grid">
                <div className="lg:h-[600px] md:h-[500] sm:h-[400px] h-[300px] w-full flex justify-center items-center">
                    <img className='lg:h-[600px] md:h-[500] sm:h-[400px] h-[300px] w-full object-fill' src="https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?w=740&t=st=1698311062~exp=1698311662~hmac=3ac7c4a3e2a235dcb7e874a509652885af17ff9e0b87bc7f2bebdcdb51538309"></img>
                </div>

                <div className="h-full w-full py-8 md:px-16 px-8">
                    <div>
                        <h3 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold tracking-tight text-gray-900">Frequently Asked Questions</h3>
                        <br/>
                        <p>Consequat anim consectetur dolore culpa fugiat tempor ad adipisicing. Pariatur velit anim irure quis do duis ex qui tempor consectetur labore cillum consectetur. Sit reprehenderit quis pariatur sint sint ea nisi quis commodo est culpa aliquip dolore culpa.</p>
                        <br/>
                        <div className="border-t-2 grid">
                            <div className="flex justify-between items-center">
                                <label onClick={()=> {
                                    if (question1===false) {
                                        setQuestion1(true)
                                    }
                                    else if (question1===true) {
                                        setQuestion1(false)
                                    }
                                }} className="font-bold py-5 cursor-pointer">How long is the grooming service?</label>
                                <label onClick={()=> {
                                    if (question1===false) {
                                        setQuestion1(true)
                                    }
                                    else if (question1===true) {
                                        setQuestion1(false)
                                    }
                                }} className='cursor-pointer'>{question1!==true ? <AiOutlinePlus className='h-[25px] w-[25px]'/> : <AiOutlineLine className='h-[25px] w-[25px]'/>}</label>
                            </div>
                            {question1===true ? 
                            <p className="pb-5 transition ease-in duration-500">Non non qui ex laboris dolore eu reprehenderit nisi reprehenderit. Tempor ad nisi aute exercitation voluptate voluptate ullamco nisi in eiusmod et tempor cupidatat. Dolor est et id culpa enim in laboris ad commodo officia veniam nisi. Sunt cillum officia anim officia mollit duis ipsum culpa exercitation. Velit magna do nostrud et nulla magna ullamco officia eu magna ullamco proident.</p>
                            :null}
                        </div>
                        <div className="border-t-2 grid">
                            <div className="flex justify-between items-center">
                                <label onClick={()=> {
                                    if (question2===false) {
                                        setQuestion2(true)
                                    }
                                    else if (question2===true) {
                                        setQuestion2(false)
                                    }
                                }} className="font-bold py-5 cursor-pointer">Can I leave my pets unattended at your pet daycare?</label>
                                <label onClick={()=> {
                                    if (question2===false) {
                                        setQuestion2(true)
                                    }
                                    else if (question2===true) {
                                        setQuestion2(false)
                                    }
                                }} className='cursor-pointer'>{question2!==true ? <AiOutlinePlus className='h-[25px] w-[25px]'/> : <AiOutlineLine className='h-[25px] w-[25px]'/>}</label>
                            </div>
                            {question2===true ? 
                            <p className="pb-5">Labore ullamco ex officia ex incididunt aliquip Lorem pariatur. Sint magna exercitation labore nulla do ad magna labore cillum elit cupidatat. Tempor labore elit incididunt sint. Eu pariatur sunt proident aute laborum. Elit est mollit proident officia eu adipisicing cupidatat et qui culpa.</p>
                            :null}
                        </div>
                        <div className="border-t-2 grid">
                        <div className="flex justify-between items-center">
                                <label onClick={()=> {
                                    if (question3===false) {
                                        setQuestion3(true)
                                    }
                                    else if (question3===true) {
                                        setQuestion3(false)
                                    }
                                }} className="font-bold py-5 cursor-pointer">Do you service other pets aside from dogs?</label>
                                <label onClick={()=> {
                                    if (question3===false) {
                                        setQuestion3(true)
                                    }
                                    else if (question3===true) {
                                        setQuestion3(false)
                                    }
                                }} className='cursor-pointer'>{question3!==true ? <AiOutlinePlus className='h-[25px] w-[25px]'/> : <AiOutlineLine className='h-[25px] w-[25px]'/>}</label>
                            </div>
                            {question3===true ? 
                            <p className="pb-5">Occaecat cillum eu aliqua ea laboris esse consectetur irure ut ut excepteur. Nostrud occaecat eiusmod eu fugiat proident sint sunt nostrud aliquip veniam aute dolor eiusmod minim. Culpa voluptate consequat elit proident laboris anim dolor cupidatat labore. Voluptate elit tempor adipisicing ex consequat minim adipisicing. Excepteur et commodo ea sit irure anim laboris.</p>
                            :null}
                        </div>
                        <div className="border-t-2 grid">
                            <div className="flex justify-between items-center">
                                <label onClick={()=> {
                                    if (question4===false) {
                                        setQuestion4(true)
                                    }
                                    else if (question4===true) {
                                        setQuestion4(false)
                                    }
                                }} className="font-bold py-5 cursor-pointer">Do you accept door to door services?</label>
                                <label onClick={()=> {
                                    if (question4===false) {
                                        setQuestion4(true)
                                    }
                                    else if (question4===true) {
                                        setQuestion4(false)
                                    }
                                }} className='cursor-pointer'>{question4!==true ? <AiOutlinePlus className='h-[25px] w-[25px]'/> : <AiOutlineLine className='h-[25px] w-[25px]'/>}</label>
                            </div>
                            {question4===true ? 
                            <p className="pb-5">Labore ullamco ex officia ex incididunt aliquip Lorem pariatur. Sint magna exercitation labore nulla do ad magna labore cillum elit cupidatat. Tempor labore elit incididunt sint. Eu pariatur sunt proident aute laborum. Elit est mollit proident officia eu adipisicing cupidatat et qui culpa.</p>
                            :null}
                        </div>
                        <div className="border-t-2 grid">
                        <div className="flex justify-between items-center">
                                <label onClick={()=> {
                                    if (question5===false) {
                                        setQuestion5(true)
                                    }
                                    else if (question5===true) {
                                        setQuestion5(false)
                                    }
                                }} className="font-bold py-5 cursor-pointer">Can i bring my sick dog in the premise of the dog spa?</label>
                                <label onClick={()=> {
                                    if (question5===false) {
                                        setQuestion5(true)
                                    }
                                    else if (question5===true) {
                                        setQuestion5(false)
                                    }
                                }} className='cursor-pointer'>{question5!==true ? <AiOutlinePlus className='h-[25px] w-[25px]'/> : <AiOutlineLine className='h-[25px] w-[25px]'/>}</label>
                            </div>
                            {question5===true ? 
                            <p className="pb-5">Occaecat cillum eu aliqua ea laboris esse consectetur irure ut ut excepteur. Nostrud occaecat eiusmod eu fugiat proident sint sunt nostrud aliquip veniam aute dolor eiusmod minim. Culpa voluptate consequat elit proident laboris anim dolor cupidatat labore. Voluptate elit tempor adipisicing ex consequat minim adipisicing. Excepteur et commodo ea sit irure anim laboris.</p>
                            :null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Questions