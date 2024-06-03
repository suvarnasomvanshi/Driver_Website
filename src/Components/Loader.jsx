import React from 'react';
import { FaUndoAlt } from "react-icons/fa";

const Loader = () => {
  return (
    <>
    <div className='animate-spin'>
        <FaUndoAlt color='#c2c2c2' size={23} />
    </div>
    </>
  )
}

export default Loader