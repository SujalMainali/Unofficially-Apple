import { footerLinks } from '../constants'

const Footer = () => {
    return (
        <div className=' text-sm text-gray-500'>
            <div className='flex flex-col'>
                <p>More ways to shop: </p>
                <p>Find an Apple Store or other retailer near you.</p>
                <p>Or call 000800-040-1966</p>
            </div>
            <div className='bg-gray-500 w-full h-[1px]'></div>
            <div className='flex justify-between items-center pr-5 max-sm:flex-col max-sm:justify-start '>
                <div>Copright @ 2024 Apple Inc. All rights reserved.</div>
                <ul className='flex justify-center gap-5 max-sm:flex-col max-sm:gap-2'>
                    {footerLinks.map((item, _) => (
                        <li key={item.id}>{item.title}</li>


                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Footer