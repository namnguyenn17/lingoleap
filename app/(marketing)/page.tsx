import { Button } from '@/components/ui/button';
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MarketingPage() {
  return (
    <div className='max-w-[988px] mx-auto w-full flex flex-1 flex-col lg:flex-row items-center justify-center p-4 gap-8'>
      <div className='relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0'>
        <Image src='/hero.svg' alt='Hero' fill />
      </div>

      <div className='flex flex-col items-center gap-y-8'>
        <div className='flex flex-col items-center gap-y-8'>
          <h1 className='text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center'>
            Learn, practice, and master a new language with LingoLeap
          </h1>
        </div>

        <div className='w-full max-w-[330px] flex flex-col items-center gap-y-3'>
          <ClerkLoading>
            <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
          </ClerkLoading>

          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode='modal'
                signInFallbackRedirectUrl='/learn'
                signInForceRedirectUrl='/learn'
              >
                <Button size='lg' variant='secondary' className='w-full'>
                  Get Started
                </Button>
              </SignUpButton>

              <SignInButton
                mode='modal'
                signUpFallbackRedirectUrl='/learn'
                signUpForceRedirectUrl='/learn'
              >
                <Button size='lg' variant='primaryOutline' className='w-full'>
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button size='lg' variant='secondary' className='w-full' asChild>
                <Link href='/learn'>Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
