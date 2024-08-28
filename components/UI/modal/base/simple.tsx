import { VariantModalProps } from '@/utils/types';
import { DialogTitle } from '@headlessui/react';
import { ReactNode } from 'react';

export const SimpleModal = ({ title, children }: VariantModalProps): ReactNode => {
  return (
    <div>
      <div className='mt-3 text-center  sm:mt-0 sm:text-left'>
        <DialogTitle as='h3' className='text-base font-semibold leading-6 text-gray-900'>
          {title}
        </DialogTitle>
        <div className='mt-2'>
          {children}
        </div>
      </div>
    </div>
  )
}