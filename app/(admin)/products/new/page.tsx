'use client';
import React, { useState } from 'react';
import { Field, Input, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Textarea } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import CardBody from '@/components/ui/card/CardBody';
import useCategory from '@/hooks/useCategory';

const NewProduct:React.FC = () => {
  const { categories } = useCategory();
  const [selectedCategory, setSelectedCategory] = useState({id: '', name: 'Select Category'});

  return (
    <>
      <div className='max-w-[800px] mx-auto'>
        <div className='text-lg font-semibold'>Add Product</div>

        <CardBody
          cardBaseClassName='mt-10'
        >
          <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <Field>
                <Label className="block text-sm/6 font-medium text-gray-900">Title</Label>
                <div className='mt-2'>
                  <Input placeholder='Short sleeve t-shirt' className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm/6' />
                </div>
              </Field>
            </div>

            <div className="sm:col-span-3">
              <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                <Label className="block text-sm/6 font-medium text-gray-900">Category</Label>
                <div className="relative mt-2">
                  <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm/6">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">{selectedCategory?.name}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon aria-hidden="true" className="size-5 text-gray-400" />
                    </span>
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                  >
                    {
                      categories?.map((category) => (
                        <ListboxOption
                          key={category.id}
                          value={category}
                          className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-secondary data-[focus]:text-white"
                        >
                          <div className="flex items-center">
                            <span className="ml-3 block truncate font-normal group-data-[selected]:font-medium">
                              {category.name}
                            </span>
                          </div>

                          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-secondary group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                            <CheckIcon aria-hidden="true" className="size-5" />
                          </span>
                        </ListboxOption>
                      ))
                    }
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>

            <div className='col-span-full'>
              <label htmlFor="productdescription" className='block text-sm/3 font-normal'>Description</label>
              <div className='mt-2'>
                <Textarea rows={5} className='rounded-lg py-2 px-2 border border-gray-300 text-sm/3 w-full focus:outline-none focus:ring-0'></Textarea>
              </div>
            </div>
          </div>
        </CardBody>
      </div>
    </>
  );
}

export default NewProduct;