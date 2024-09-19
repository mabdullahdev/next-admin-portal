import { VariantModalProps } from '@/utils/types';
import { Description, DialogTitle } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid';
import { ReactNode } from 'react';

export const CenteredModal = ({ title, description, children, icon }: VariantModalProps): ReactNode => {
  const defaultIcon = (
    <div className='mx-auto flex flex-shrink-0 h-12 w-12 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10'>
      <CheckIcon className=' h-6 w-6 text-green-600' />
    </div>
  );
  return (
    <>
      <div className='flex justify-center mb-3'>
        {icon ? icon : defaultIcon}
      </div>
      <div className='mt-3 text-center sm:mt-0 sm:text-center'>
        <DialogTitle as='h3' className='text-base font-semibold leading-6 text-gray-900'>
          {title}
        </DialogTitle>
        <Description className='text-center text-sm text-gray-500'>{description}</Description>
        <div className='mt-2'>
          {children}
        </div>
      </div>
    </>
  )
}



