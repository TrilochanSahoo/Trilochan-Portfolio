import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { frontendTechStack, backendTechStack, devops } from '@/constants/index';

const Skills = () => {
  return (
    <div>
      <div className="py-20 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <h1 className='text-center text-gray-300 font-bold text-2xl py-10 '>Skills</h1>
        <div>
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