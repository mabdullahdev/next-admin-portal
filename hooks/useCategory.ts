'use client';
import { useQuery } from 'react-query';
import apiRequest from '@/utils/services/apiRequest';

interface Category {
  id: string;
  name: string;
}

const useCategory = () => {
  const fetchCategories = async ():Promise<Category[]> => {
    const response = await apiRequest<Category[]>('/api/store/categories', 'get');
      
    if (!response.data) {
      throw new Error('No categories found');
    }

    return response.data;
  }

  const { data: categories } = useQuery<Category[]>('categories', fetchCategories, { staleTime: 60000 });

  return {
    categories,
  }
}

export default useCategory;