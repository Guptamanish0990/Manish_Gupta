import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionState, setTransitionState] = useState('');

  useEffect(() => {
    if (location.pathname !== children.props.location?.pathname) {
      setTransitionState('exiting');
      setTimeout(() => {
        setDisplayChildren(children);
        setTransitionState('entering');
        setTimeout(() => {
          setTransitionState('');
        }, 600);
      }, 500);
    } else {
      setDisplayChildren(children);
    }
  }, [children, location]);

  return (
    <>
      <div className={`page-transition-overlay ${transitionState}`}>
        <div className="to-panel"></div>
        <div className="to-panel"></div>
        <div className="to-panel"></div>
        <div className="to-panel"></div>
        <div className="to-panel"></div>
      </div>
      {displayChildren}
    </>
  );
};

export default PageTransition;