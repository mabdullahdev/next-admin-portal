import { VariantModalProps } from '@/utils/types';
import { Description, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/16/solid';
import { ReactNode } from 'react';

export const JustifiedModal = ({ title,children, description, icon }: VariantModalProps): ReactNode => {
  const defaultIcon = (
    <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
      <ExclamationTriangleIcon aria-hidden='true' className='h-6 w-6 text-red-600' />
    </div>
  );
  return (
    <div className='sm:flex sm:items-start'>
      {icon ? icon : defaultIcon}
      <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
        <DialogTitle as='h3' className='text-base font-semibold leading-6 text-gray-900'>
          {title}
        </DialogTitle>
        <Description className='text-sm text-gray-500'>{description}</Description>
        <div className='mt-2'>
          {children}
        </div>
      </div>
    </div>
  )
}

