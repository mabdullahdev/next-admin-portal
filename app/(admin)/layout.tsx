'use client';
import React from 'react';
import Link from 'next/link';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Inter } from 'next/font/google';
import { UsersIcon, TagIcon, ArrowTurnDownRightIcon, HomeIcon } from '@heroicons/react/24/solid';
import useSidebar from '@/hooks/useSidebar';

const inter = Inter({ subsets: ['latin'] });
const queryClient = new QueryClient();

interface AdminLayoutProps {
  children: React.ReactNode
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { selected, setSelected } = useSidebar();

  return (
    <>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <div className='bg-primary-inverse w-100 h-screen'>
            {/* Topbar Start */}
            <div className='h-14 z-999'></div>
            {/* Topbar End */}

            <div className={`h-calc-100-minus-top-bar flex overflow-hidden bg-primary rounded-tl-xl rounded-tr-xl ${inter.className}`}>
              {/* Sidebar Start */}
              <aside className={`absolute left-0 top-0 flex w-60 flex-col overflow-y-hidden bg-aside duration-300 ease-linear lg:static lg:translate-x-0 -translate-x-full`}>
                {/* Sidebar Header */}
                {/* Sidebar Header */}

                {/* Sidebar Menu */}
                <div className='no-scollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
                  <nav className='mt-5 px-2 py-4 lg:mt-9 lg:px-3'>
                    <div>
                      <ul className='mb-6 flex flex-col gap-1.5'>
                        {/* Menu Item */}
                        <li onClick={() => setSelected('Home')}>
                          <Link href='#' className={`flex items-center justify-between gap-1 rounded-lg px-4 py-1.5 text-sm ${selected === 'Home' ? 'font-medium' : 'font-normal'} tracking-wide duration-300 ease-in-out hover:bg-nav-li-hover active:bg-nav-li-active`}>
                            <div className='flex items-center gap-1.5'>
                              <HomeIcon className='size-5' />
                              <span>Home</span>
                            </div>
                          </Link>
                        </li>
                        {/* Dropdown Menu */}
                        <div className={`translate transition-transform duration-1000 ease-in-out overflow-hidden ${selected == 'Customers' ? 'block' : 'hidden'}`}>
                          <ul className='mb-5.5 flex flex-col gap-2.5'>
                            <li onClick={() => setSelected('Profiles')}>
                              <Link href='/customers' className={`flex items-center justify-between gap-2.5 rounded-lg px-4 py-2 text-xs ${selected === 'Profiles' ? 'font-medium' : 'font-light'} tracking-wide text-nav-li-light dark:text-nav-li-dark duration-300 ease-in-out hover:bg-nav-li-hover-light dark:hover:bg-nav-li-hover-dark`}>
                                <div className='flex items-center gap-2.5'>
                                  <ArrowTurnDownRightIcon className='size-5' />
                                  <span>Profiles</span>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        {/* Dropdown Menu */}
                        {/* Menu Item */}

                        {/* Menu Item */}
                        <li onClick={() => setSelected('Orders')}>
                          <a className={`flex items-center justify-between gap-2.5 rounded-lg px-4 py-2 text-xs ${selected === 'Orders' ? 'font-medium' : 'font-light'} text-nav-li-light dark:text-nav-li-dark duration-300 ease-in-out hover:bg-nav-li-hover-light dark:hover:bg-nav-li-hover-dark`} href='#'>
                            <div className='flex items-center gap-2.5'>
                              <UsersIcon className='size-5' />
                              <span>Orders</span>
                            </div>
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

                        {/* Menu Item */}
                        <li onClick={() => setSelected('Products')}>
                          <Link href='/products' className={`flex items-center justify-between gap-2.5 rounded-lg px-4 py-2 text-xs ${selected === 'Products' ? 'font-medium' : 'font-light'} text-nav-li-light dark:text-nav-li-dark duration-300 ease-in-out hover:bg-nav-li-hover-light dark:hover:bg-nav-li-hover-dark`}>
                            <div className='flex items-center gap-2.5'>
                              <TagIcon className='size-5' />
                              <span>Products</span>
                            </div>
                          </Link>
                        </li>
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
          </div>
        </QueryClientProvider>
      </React.StrictMode>
    </>
  )
};

export default AdminLayout;