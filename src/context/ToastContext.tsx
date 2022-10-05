/* eslint-disable react/jsx-no-constructed-context-values */
import React, {createContext, useState} from 'react';

export type TypeOptions = 'info' | 'success' | 'warning' | 'error' | 'default';

export interface ToastProps {
  id: string;
  type: TypeOptions;
  message: string;
  autoClose: number;
}
export interface ToastOption {
  autoClose: number;
  type: TypeOptions;
}

export const uid = () => {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, '');
};

export const initialValue: ToastProps[] = [];
export const useToast = () => useState<ToastProps[]>(initialValue);
export interface ToastContextProps {
  toast: (message: string, options: ToastOption) => void;
  queue: ToastProps[];
  // addQueue: (queue: ToastProps) => void;
}

export const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

const ToastProvider = ({children}: {children: React.ReactNode}) => {
  const [queue, setQueue] = useState<ToastProps[]>([]);
  const toast = (message: string, options: ToastOption) => {
    const newToast: ToastProps = {
      id: uid(),
      message,
      ...options,
    };
    setQueue(queue => {
      return [...queue, newToast];
    });
    setTimeout(() => {
      setQueue(queue => {
        const autoClose = queue.filter(q => q.id !== newToast.id);
        return [...autoClose];
      });
    }, options.autoClose);
  };
  return <ToastContext.Provider value={{toast, queue}}>{children}</ToastContext.Provider>;
};

export default ToastProvider;
