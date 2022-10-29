import { createContext, useState } from 'react';

const uid = () => {
  return performance.now().toString(36);
};

export interface ToastContextProps {
  toast: (message: string) => void;
  queue: any[];
}

export const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

export const useToastInit = () => {
  const [queue, setQueue] = useState<any[]>([]);
  const toast = (message: string) => {
    const newToast = {
      uid: uid(),
      message: message,
    };
    setQueue((queue) => {
      return [...queue, newToast];
    });
    setTimeout(() => {
      setQueue((queue) => {
        const newQueue = queue.filter((q) => q.uid !== newToast.uid);
        return [...newQueue];
      });
    }, 3000);
  };
  return {
    toast,
    queue,
  };
};
