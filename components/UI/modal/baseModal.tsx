'use client'
import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon, XMarkIcon,CheckIcon } from '@heroicons/react/16/solid';
import React, { ReactNode } from 'react';


export enum ModalVariants{
  SIMPLE = 'SIMPLE',
  JUSTIFIED = 'JUSTIFIED',
  CENTERED = 'CENTERED',
}

interface ModalProps {
  title: string;
  description?: string;
  icon?: string;
  className?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  close: () => void;
  variant?: ModalVariants;
}

const BaseModal = (props: ModalProps): ReactNode => {
  if(props.variant === ModalVariants.JUSTIFIED) return <JustifiedModal {...props}/>
  if(props.variant === ModalVariants.CENTERED) return <CenteredModal {...props}/>
  return <SimpleModal {...props}/>
}

const SimpleModal = ({ title, open, children, close }: ModalProps): ReactNode => {
  return (
    <Dialog open={open} className='relative z-10' onClose={close}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="absolute top-2.5 right-2.5">
                <Button onClick={close}>
                  <XMarkIcon className='h-6 w-6 text-gray-900'/>
                </Button>
              </div>
              <div>
                <div className="mt-3 text-center  sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    {title}
                  </DialogTitle>
                  <div className="mt-2">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )

}

const JustifiedModal = ({ title, open, children, close }: ModalProps): ReactNode => {
  return (
    <Dialog open={open} className='relative z-10' onClose={close}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="absolute top-2.5 right-2.5">
                <Button onClick={close}>
                  <XMarkIcon className='h-6 w-6 text-gray-900'/>
                </Button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    {title}
                  </DialogTitle>
                  <div className="mt-2">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )

}

const CenteredModal = ({ title, open, children, close }: ModalProps): ReactNode => {

  return (
    <Dialog open={open} className='relative z-10' onClose={close}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="absolute top-2.5 right-2.5">
                <Button onClick={close}>
                  <XMarkIcon className='h-6 w-6 text-gray-900' />
                </Button>
              </div>
              <div className='flex  justify-center mb-3'>
                <div className="mx-auto flex flex-shrink-0 h-12 w-12 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                  <CheckIcon className=' h-6 w-6 text-green-600' />
                </div>
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                  {title}
                </DialogTitle>
                <div className="mt-2">
                  {children}
                </div>
              </div>

            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>

  )

}
export default BaseModal;


