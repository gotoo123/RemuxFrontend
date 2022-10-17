import React, {useEffect, useState} from 'react';
import '@animxyz/core';
import {XyzTransition, XyzTransitionGroup} from '@animxyz/react';
import './index.less';

const Screen = () => {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);

  useEffect(() => {
    setTimeout(()=> {
      setA(true);
    }, 1000)
    setTimeout(() => {
      setB(true);
    }, 2500)
  }, [])

  const handleClick = () => {
    setA(!a);
  }

  const arr = 'Remux'.split('');

  return (
    <div className={`wrapper`}>
      <div className={`title`}>
        <XyzTransitionGroup
          className="example-grid"
          appear
          duration="auto"
          xyz="in-duration-10 out-duration-3 fade rotate-right-3 flip-down origin-bottom stagger-1 out-stagger-rev"
        >
          {a &&
          arr.map((item, index) => (
            <div
              className={`square`}
              key={index}
            >{item}</div>
          ))}
        </XyzTransitionGroup>
      </div>

      <div className={`welcome`}>
        <XyzTransition xyz="fade up-2 flip-up-0 left-5">
          {b && <div className="square1">点击进入</div>}
        </XyzTransition>
      </div>

    </div>

  )
}

export default Screen;
