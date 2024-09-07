import { useEffect, useState } from 'react';

import { getCategories } from '@/services/categories';

export default function useCategories() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getCategories().then((cats) => {
      setCategories(cats);
    });
  }, []);

  return { categories };
}
