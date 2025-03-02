import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { frontendTechStack, backendTechStack, devops } from '@/constants/index';

const Skills = () => {
  return (
    <div id='skills' className='relative z-10'>
      <div className="py-20 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <div className='group relative py-10'>
          <h1 className='text-center text-gray-300 font-bold text-4xl '>
            Skills
          </h1>
          <span className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-sky-500/0 opacity-100 transition group:opacity-100"></span>
        </div>
        <div >
          <InfiniteMovingCards
            items={frontendTechStack}
            direction="right"
            speed="slow"
          />
        </div>
        <div>
          <InfiniteMovingCards
            items={backendTechStack}
            direction="left"
            speed="slow"
          />
        </div>
        <div>
          <InfiniteMovingCards
            items={devops}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default Skills