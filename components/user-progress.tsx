import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { InfinityIcon } from 'lucide-react';

type Props = {
  activeCourse: { title: string; imageSrc: string };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className='flex items-center justify-between gap-x-2 w-full'>
      <Link href='/courses'>
        <Button>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            width={32}
            height={32}
            className='rounded-md border'
          />
        </Button>
      </Link>
      <Link href='/shop'>
        <Button variant='ghost' className='text-orange-500'>
          <Image
            src='/points.svg'
            alt='Points'
            width={28}
            height={28}
            className='mr-2'
          />
          {points}
        </Button>
      </Link>
      <Link href='/shop'>
        <Button variant='ghost' className='text-rose-500'>
          <Image
            src='/heart.svg'
            alt='Heart'
            width={22}
            height={22}
            className='mr-2'
          />
          {hasActiveSubscription ? <InfinityIcon className='w-4 h-4 stroke-[3]' /> : hearts}
        </Button>
      </Link>
    </div>
  );
};
