import {useCallback, useEffect, useState, useMemo} from 'react';
import useDebounce from './useDebounce';

export default function useSearch(products) {
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // Derived filtered products (combines search + category filters)
  const filteredProducts = useMemo(() => {
    if (selectedCategory.toLowerCase() === 'all') {
      return searchResult;
    }
    return searchResult.filter(product =>
      product.category.name
        .toLowerCase()
        .includes(selectedCategory.toLowerCase()),
    );
  }, [searchResult, selectedCategory]);

  // Search effect
  useEffect(() => {
    if (debouncedSearchQuery.trim() === '') {
      if (isActive) {
        // Show all products when search is active but empty
        setSearchResult(products);
      } else {
        setSearchResult([]);
      }
    } else {
      // Filter by search query
      const result = products.filter(product =>
        product.title
          .toLowerCase()
          .includes(debouncedSearchQuery.toLowerCase()),
      );
      setSearchResult(result);
    }
  }, [debouncedSearchQuery, products, isActive]);

  // Handle search input changes
  const handleUserSearch = useCallback(
    input => {
      setSearchQuery(input);
      if (input === '' && !isActive) {
        setSearchResult(products);
      }
    },
    [isActive, products],
  );

  const filterSearchResults = useCallback(category => {
    setSelectedCategory(category);
  }, []);

  const resetSearch = () => {
    setSearchQuery('');
    setSearchResult([]);
    setSelectedCategory('All');
  };
  useEffect(() => {
    if (!isActive) {
      resetSearch();
    }
  }, [isActive]);

  return {
    searchQuery,
    handleUserSearch,
    isActive,
    setIsActive,
    searchResult,
    filteredProducts, // Derived value
    filterSearchResults,
    selectedCategory,
  };
}
