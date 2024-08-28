import { VariantModalProps } from '@/utils/types';
import { DialogTitle } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid';
import { ReactNode } from 'react';

export const CenteredModal = ({ title, children }: VariantModalProps): ReactNode => {
  return (
    <>
      <div className='flex  justify-center mb-3'>
        <div className='mx-auto flex flex-shrink-0 h-12 w-12 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10'>
          <CheckIcon className=' h-6 w-6 text-green-600' />
        </div>
      </div>
      <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center'>
        <DialogTitle as='h3' className='text-base font-semibold leading-6 text-gray-900'>
          {title}
        </DialogTitle>
        <div className='mt-2'>
          {children}
        </div>
      </div>
    </>
  )
}



