import { QueryFunction, UseQueryResult, useQuery } from "@tanstack/react-query";

export const useApiQuery = <T>(
  queryFn: QueryFunction<T>,
  queryKey: string[]
): UseQueryResult<T> => {
  return useQuery<T>({
    queryFn: queryFn,
    queryKey: queryKey,
  });
};
