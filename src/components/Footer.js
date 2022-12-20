import { Link } from '@chakra-ui/react'

export default function Footer(){
    return(
        <footer class="bg-gray-800 py-10 text-gray-400 text-xl px-5">
            <div class="flex flex-col lg:flex-row">
                <div class="w-full lg:w-1/3">
                    <h3 className='text-2xl font-bold mb-5'>About Us</h3>
                    <p className='text-gray-600 mb-8'>A website designed for Cat Lovers. </p>                
                </div>
                <div class="w-full lg:w-1/3 flex-1">
                    <div>
                        <Link href="#">Home</Link>
                    </div>
                    <div>
                        <Link href="#">About us</Link>
                    </div>
                    <div>
                        <Link href="#">Contact us</Link>
                    </div>

                </div>
                <div class="w-full lg:w-1/3">
                    example@gmail.com
                </div>
            </div>

        </footer>

            // <footer className='bg-black py-10'>
            //     <div className='container mx-auto px-5'>
            //         <div className='flex flex-wrap'>
            //             <div className='w-full md:w-1/2 lg:w-1/3'>
            //                 <h3 className='text-2xl font-bold mb-5'>About Us</h3>
            //                 <p className='text-gray-600 mb-8'>A website designed for Cat Lovers. </p>
            //                 <div className='flex items-center'>
            //                     <svg className='w-6 h-6 fill-current text-gray-600 mr-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 0"/><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 0"/><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 0"/><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 0"/><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 0"/><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 0"/><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 0"/><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8"
            //                     ></path></svg>
            //                     <p className='text-gray-600'>+1 234 567 890</p>
            //                 </div>
                       
            //                 </div>
            //                 </div>
            //     </div>    
            // </footer>
    )


}