'use client'
import React from 'react';
import useAuth from '@/hooks/useAuth';
import WarningModal from '@/components/ui/modal/warningModal';
import useModal from '@/hooks/useModal';
import { Button } from '@headlessui/react';

const DashboardPage: React.FC = () => {
  const { isOpen, open, close } = useModal();
  const { handleLogoutSubmit } = useAuth();

  return (
    <>
      <h1>Dashboard Page</h1>
      <Button
        onClick={open}
        className='rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white'
      >
        Open dialog
      </Button>

      <Button
        onClick={handleLogoutSubmit}
        className='rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white'
      >
        Logout
      </Button>

      {isOpen && (
        <WarningModal
          title='Deactivate account'
          open={isOpen}
          close={close}
          warning='Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.'
          onConfirmBtn={close}
        />
      )}
    </>
  );
}

export default DashboardPage;
