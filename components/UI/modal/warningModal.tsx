'use client'
import { ModalVariants } from '@/utils/constants';
import { WarningModalProps } from '@/utils/types';
import { ReactNode } from 'react';
import BaseModal from './base';



const WarningModal = (props: WarningModalProps): ReactNode => {
  const { warning, close, onConfirmBtn, ...restProps } = props;

  return (
    <BaseModal
      variant={ModalVariants.CENTERED}
      close={close}
      {...restProps}

    >
      <p className='text-sm text-gray-500'>
        {warning}
      </p>
      <div className='border-t mt-4  pb-0 py-3 sm:flex sm:flex-row-reverse gap-3 '>
        <button
          type='button'
          data-autofocus
          onClick={close}
          className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
        >
          Cancel
        </button>
        <button
          type='button'
          data-autofocus
          onClick={onConfirmBtn}
          className='mt-3 inline-flex w-full justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-green-600 hover:bg-green-500 sm:mt-0 sm:w-auto'
        >
          Confirm
        </button>
      </div>
    </BaseModal>
  );
}

export default WarningModal;
