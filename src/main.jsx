import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='primary-font-roboto'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
