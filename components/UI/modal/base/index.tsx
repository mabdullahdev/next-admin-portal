'use client'

import { ModalVariants } from '@/utils/constants';
import { ModalProps } from '@/utils/types';
import { Button, Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { ReactNode } from 'react';
import { CenteredModal } from './centered';
import { JustifiedModal } from './justified';
import { SimpleModal } from './simple';

const BaseModal = (props: ModalProps): ReactNode => {
  const { close, open, variant, ...variantModalProps } = props

  const VariantMapping = {
    [ModalVariants.JUSTIFIED]: <JustifiedModal {...variantModalProps} />,
    [ModalVariants.CENTERED]: <CenteredModal {...variantModalProps} />,
    [ModalVariants.SIMPLE]: <SimpleModal {...variantModalProps} />,
  }

  const innerContent = !variant ? VariantMapping[ModalVariants.SIMPLE] : VariantMapping[variant]

  return (
    <Dialog open={open} className='relative z-10' onClose={close}>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
      />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <DialogPanel
            transition
            className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
          >
            <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
              <div className='absolute top-2.5 right-2.5'>
                <Button onClick={close}>
                  <XMarkIcon className='h-5 w-5 text-gray-900' />
                </Button>
              </div>
              {innerContent}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
export default BaseModal;


