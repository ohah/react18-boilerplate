import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";

export type TypeOptions = 'info' | 'success' | 'warning' | 'error' | 'default';

export interface ToastProps {
  type:TypeOptions;
  message:string,
  timeout:number
}

interface ContainerInstance {
  queue:ToastProps[],
  props:any,
}

const useToast = () => {
  const [instance, setInstance] = useState<ContainerInstance>({
    queue:[],
    props:{}
  });

  // useEffect(()=>{
  //   console.log('변화', instance);
  // }, [instance])
  const toast = instance;
  // const toast = useCallback(()=>{
  //   return instance
  // }, [instance])
  const setToast = useCallback((toast:ToastProps) => {
    instance.queue.push(toast);
    setInstance(instance);
  }, []);
  // setToast({
  //   type: 'info',
  //   message: '내부테스트',
  //   timeout: 3000,
  // });
  // const [t, s] = [toast, setToast];
  // console.log('array', toast, setToast);
  return [
    toast,
    setToast as any,
  ]
}

export default useToast;