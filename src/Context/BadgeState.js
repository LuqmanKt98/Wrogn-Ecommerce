import React, { createContext, useState } from 'react';

export const badgeContext = createContext();

function BadgeState(props) {
  const [badgeCount, setBadgeCount] = useState(0);

  return (
    <badgeContext.Provider value={{badgeCount,setBadgeCount}}>
      {props.children}
    </badgeContext.Provider>
  );
}

export default BadgeState;
