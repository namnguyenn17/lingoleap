import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import Image from 'next/image';

type Props = {
  id: number;
  title: string;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  isActive?: boolean;
};

export const Card = ({
  id,
  title,
  imageSrc,
  onClick,
  disabled,
  isActive,
}: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        'flex h-full min-h-[217px] min-w-[200px] cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-b-[4px] p-3 pb-6 hover:bg-black/5 active:border-b-2',
        disabled && 'pointer-events-none opacity-50'
      )}
    >
      <div className='flex min-h-[24px] w-full items-center justify-end'>
        {isActive && (
          <div className='rounded-md bg-green-600 flex items-center justify-center p-1.5'>
            <Check className='text-white stroke-[4] h-4 w-4' />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        width={93.33}
        height={70}
        className='rounded-lg drop-shadow-md border object-cover'
      />
      <p className='text-neutral-700 text-center font-bold mt-3'>{title}</p>
    </div>
  );
};
