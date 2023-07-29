import { ToastContainer as ToastifyContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainer = () => {
  return <ToastifyContainer />;
};

export const showToast = (message, options) => {
  toast(message, options);
};

export default ToastContainer;