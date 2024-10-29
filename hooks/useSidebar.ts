'use client';

import { useState } from 'react';

interface SidebarHook {
  selected: string;
  setSelected: (selected: string) => void;
};

const useSidebar = (): SidebarHook => {
  const [selected, setSelected] = useState<string>('');

  return {
    selected,
    setSelected
  };
}

export default useSidebar;