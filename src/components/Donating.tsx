import React from "react";
import './Donating.css';

const Donating: React.FC = () => {
  return (
    <>
      <div>
        <a href='https://www.buymeacoffee.com/iamrezamousavi' target='_blank' rel='noreferrer'>
          <img className='buy-me-coffee' src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png' alt='Buy Me A Coffee' />
        </a>

        <a href='http://www.coffeete.ir/iamrezamousavi' target='_blank' rel='noreferrer'>
          <img className='coffeete' src='http://www.coffeete.ir/images/buttons/lemonchiffon.png' />
        </a>
      </div>
    </>
  )
}

export default Donating;
