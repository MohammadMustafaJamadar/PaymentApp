export const productsDataFetch = async <ResultType>(
  path: string
): Promise<ResultType> => {
  const res = await fetch(path);
  return res.json();
};
