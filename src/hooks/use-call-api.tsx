import { useState, useEffect } from 'react';
import { apiEndPoints } from './../constants/api-end-points';

type Keys = keyof typeof apiEndPoints;
type ApiEndPointsValues = (typeof apiEndPoints)[Keys];

export const useCallApi = (apiEndPoint: ApiEndPointsValues) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<string>();
  const [data, setData] = useState<Record<string, string | object | []>>();

  useEffect(() => {
    const callApi = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}${apiEndPoint}`
        );
        const data = await response.json();
        setData(data?.data);
      } catch (error) {
        setError(error?.message);
      } finally {
        setIsLoading(false);
      }
    };
    callApi();
  }, []);

  return {
    isLoading,
    error,
    data,
  };
};
