'use client'
import WarningModal from '@/components/UI/modal/warning-modal';
import useModal from '@/hooks/useModal';
import { Button } from '@headlessui/react';
import React from 'react';

const DashboardPage: React.FC = () => {
  const { isOpen, open, close, setIsOpen } = useModal();

  return (
    <>
      <h1>Dashboard Page</h1>
      <Button
        onClick={open}
        className='rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white'
      >
        Open dialog
      </Button>

      {isOpen && (
        <WarningModal
          title='Deactivate account'
          open={isOpen}
          close={close}
          setOpen={setIsOpen}
          warning='Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.'
          onConfirmBtn={close}
        />
      )}
    </>
  );
}

export default DashboardPage;
