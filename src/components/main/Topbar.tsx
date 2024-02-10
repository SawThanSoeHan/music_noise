import SoundIcon from '../icons/SoundIcon'



export default function Topbar() {
  return (
    <div className='flex flex-row items-center justify-between p-4 lg:p-7'> 
        <SoundIcon className='w-[37px] h-[37px] sm:w-[57px] sm:h-[57px] md:w-[66px] md:h-[66px] lg:w-[88px] lg:h-[88px] hover:cursor-pointer fill-[#f7ffc7] hover:fill-slate-100'/>        
        <nav className='flex flex-row space-x-3 lg:space-x-6'>
            <img src='/home.png' className='w-[74px] h-[30px] sm:w-[105px] sm:h-[49px] md:w-[120px] md:h-[56px] lg:w-[158px] lg:h-[74px] hover:cursor-pointer'></img>
            <img src='/story.png' className='w-[74px] h-[30px] sm:w-[105px] sm:h-[49px] md:w-[120px] md:h-[56px] lg:w-[158px] lg:h-[74px] hover:cursor-pointer'></img>
            <img src='/game.png' className='w-[74px] h-[30px] sm:w-[105px] sm:h-[49px] md:w-[120px] md:h-[56px] lg:w-[158px] lg:h-[74px] hover:cursor-pointer'></img>
        </nav>
        <img src='/user.png' className='w-[37px] h-[37px] sm:w-[57px] sm:h-[57px] md:w-[66px] md:h-[66px] lg:w-[88px] lg:h-[88px] hover:cursor-pointer'></img>
    </div>
  )
}
