import {Toast} from 'component/toast';
import useToast from 'hook/useToast';
import {useEffect} from 'react';

export const ToastContainer = () => {
  const [toast, setToast] = useToast();
  useToast();
  useEffect(() => {
    console.log('변경될때마다', toast);
  }, [toast]);
  return (
    <div>
      {/* {Object.values(toast().instance.queue).map((queue: any) => {
        console.log('qu', queue);
        // return <div key={queue.message}> 테스트 </div>;
        return <Toast {...queue} />;
      })} */}
    </div>
  );
};
export default ToastContainer;
