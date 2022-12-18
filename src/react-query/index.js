import { useQuery } from '@tanstack/react-query'
import { getProductById, getProducts } from "../api";

export const useProducts = (url) => {
   // const { data, isLoading } = useQuery([url], getProducts)
   // return { data, isLoading };

   const { data, isLoading, isError, isSuccess } = useQuery([url], getProducts);
   return { data, isLoading, isError, isSuccess };
};

export const useProductById = (productId) => {
   // const { data, isLoading } = useQuery([productId], getProductById)
   // return { data, isLoading };

   const { data, isLoading, isError, isSuccess } = useQuery(
      [productId],
      getProductById
   );
   return { data, isLoading, isError, isSuccess };
};