'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItem = ({ label, iconSrc, href }: Props) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Button
      variant={isActive ? 'sidebarOutline' : 'sidebar'}
      className='justify-start h-52px'
      asChild
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          width={32}
          height={32}
          className='mr-5'
        />
        {label}
      </Link>
    </Button>
  );
};
