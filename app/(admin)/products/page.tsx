'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/button';
import apiRequest from '@/utils/services/apiRequest';

const ProductPage: React.FC = () => {
  useEffect(() => {
    console.log('Product Mounted');
    apiRequest('/api/store/categories', 'get');
  }, []);

  return (
    <div className='flex flex-row'>
      <div className='basis-4/5'>This is product page</div>
      <div className='basis-1/5'>
        <Link href={`/products/new`}>
          <Button variant='secondary'>New</Button>
        </Link>
      </div>
    </div>
  );
}

export default ProductPage;