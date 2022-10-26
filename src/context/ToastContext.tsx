import { createContext, useState, useContext } from 'react';
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

const uid = () => {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, '');
};

export interface ToastContextProps {
  toast: (message: string, options: ToastOption) => void;
  queue: ToastProps[];
  setQueue: React.Dispatch<React.SetStateAction<ToastProps[]>>;
}

export const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

export const useToast = () => {
  return useContext(ToastContext);
};

export const useToastInit = () => {
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
  };
  return {
    toast,
    queue,
    setQueue,
  };
};
