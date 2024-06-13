"use client";

import useSWR from "swr";
import { useAtomValue } from "jotai";
import { queryAtom } from "@/stores/queryAtom";

export const getEmployee = () => {
  const query = useAtomValue(queryAtom);

  const pageQuery = query.page ? `?page=${query.page}` : `?page=1`;
  const limitQuery = query.limit && `?limit=${query.limit}`;
  const orderQuery = query.order && `?order=${query.order}`;
  const searchQuery = query.search && `&search=${query.search}`;

  const fetcher = (key: string | URL | Request) =>
    fetch(key).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/employees${pageQuery}${limitQuery}${orderQuery}${searchQuery}`,
    fetcher
  );

  return { employees: data, error, isLoading };
};
