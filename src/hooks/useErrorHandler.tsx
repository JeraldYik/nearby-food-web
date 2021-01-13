import { createContext, useState } from 'react';
import ErrorPage from 'next/error';

export interface ErrorType {
  statusCode: number;
  errorMessage: string;
}

interface IErrorHandler {
  sendError: (type: ErrorType) => void;
}

export const ErrorHandler = createContext<IErrorHandler>({
  sendError: (): void => {}
});

// export const useErrorHandler = (): IErrorHandler => useContext(ErrorHandler);

export const ErrorHandlerProvider = ({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element => {
  const [error, setError] = useState<null | ErrorType>(null);
  const sendError = (type: ErrorType): void => {
    setError(type);
  };

  return (
    <ErrorHandler.Provider value={{ sendError }}>
      {error && <ErrorPage statusCode={error.statusCode} title={error.errorMessage} />}
      {!error && <>{children}</>}
    </ErrorHandler.Provider>
  );
};
