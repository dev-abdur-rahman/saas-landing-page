import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className='relative flex justify-center items-center bg-black py-3 gap-x-3'>
        <p className="text-white/60 hidden lg:block">This page is included in a free SaaS Website Kit.</p>
        <div className="flex  gap-3 justify-center items-center ">
            <h1 className='text-blue-50 capitalize'>get the complete kit</h1>
            <div className="flex">
                <FaArrowRight className="text-white shrink-0"/>
            </div>
        </div>
    </div>
  )
}

export default Header