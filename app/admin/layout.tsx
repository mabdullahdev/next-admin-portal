import React from 'react';
import { Inter } from 'next/font/google';
import { UsersIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import useSidebar from '@/hooks/useSidebar';

const inter = Inter({ subsets: ['latin'] });

interface AdminLayoutProps {
  children: React.ReactNode
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { selected, setSelected } = useSidebar();

  return (
    <>
      <div className={`flex h-screen overflow-hidden ${inter.className}`}>
        {/* Sidebar Start */}
        <aside className={`absolute left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden bg-aside-light duration-300 ease-linear dark:bg-aside-dark lg:static lg:translate-x-0 -translate-x-full border-r border-gray-300`}>
          {/* Sidebar Header */}
          {/* Sidebar Header */}

          {/* Sidebar Menu */}
          <div className='no-scollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
            <nav className='mt-5 px-4 py-4 lg:mt-9 lg:px-6'>
              <div>
                <h3 className='mb-2 ml-4 text-sm font-light text-nav-heading-light dark:text-nav-heading-dark'>Menu</h3>
                <ul className='mb-6 flex flex-col gap-1.5'>
                  {/* Menu Item */}
                  <li onClick={() => setSelected('Customers')}>
                    <a className='flex items-center justify-between gap-2.5 rounded-lg px-4 py-2.5 font-light text-sm text-nav-li-light dark:text-nav-li-dark duration-300 ease-in-out hover:bg-nav-li-hover-light dark:hover:bg-nav-li-hover-dark' href='#'>
                      <div className='flex items-center gap-2.5'>
                        <UsersIcon className='size-5' />
                        <span>Customers</span>
                      </div>
                      <ChevronDownIcon className={`transition-transform duration-500 ease-in-out size-4 ${selected == 'Customers' ? 'rotate-180' : ''}`} />
                    </a>
                  </li>
                  {/* Dropdown Menu */}
                  <div className={`translate transition-transform duration-1000 ease-in-out overflow-hidden ml-5 ${selected == 'Customers' ? 'block' : 'hidden'}`}>
                    <ul className='border-l-2 mb-5.5 mt-2 flex flex-col gap-2.5 pl-2'>
                      <li className='rounded-l-lg'>
                        <a className='px-4 font-light text-sm duration-300 ease-in-out text-nav-li-light dark:text-nav-li-dark hover:text-nav-li-a cursor-pointer'>List 1</a>
                      </li>

                      <li className='rounded-l-lg'>
                        <a className='px-4 font-light text-sm duration-300 ease-in-out text-nav-li-light dark:text-nav-li-dark hover:text-nav-li-a cursor-pointer'>List 2</a>
                      </li>
                    </ul>
                  </div>
                  {/* Dropdown Menu */}
                  {/* Menu Item */}

                  {/* Menu Item */}
                  <li onClick={() => setSelected('Orders')}>
                    <a className='flex items-center justify-between gap-2.5 rounded-lg px-4 py-2.5 font-light text-sm text-nav-li-light dark:text-nav-li-dark duration-300 ease-in-out hover:bg-nav-li-hover-light dark:hover:bg-nav-li-hover-dark' href='#'>
                      <div className='flex items-center gap-2.5'>
                        <UsersIcon className='size-5' />
                        <span>Orders</span>
                      </div>
                      <ChevronDownIcon className={`transition-transform duration-500 ease-in-out size-4 ${selected == 'Orders' ? 'rotate-180' : ''}`} />
                    </a>
                  </li>
                  {/* Dropdown Menu */}
                  <div className={`translate transition-transform duration-1000 ease-in-out overflow-hidden ${selected == 'Orders' ? 'block' : 'hidden'}`}>
                    <ul className='mb-5.5 mt-2 flex flex-col gap-2.5 pl-8'>
                      <li>
                        <a className='px-4 font-light text-sm duration-300 ease-in-out text-nav-li-light dark:text-nav-li-dark hover:text-nav-li-a cursor-pointer'>List</a>
                      </li>
                    </ul>
                  </div>
                  {/* Dropdown Menu */}
                  {/* Menu Item */}
                </ul>
              </div>
            </nav>
          </div>
          {/* Sidebar Menu */}
        </aside>
        {/* Sidebar End */}
        <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  )
};

export default AdminLayout;