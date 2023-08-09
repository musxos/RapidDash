import React from 'react';

function GlobalLayout({ children }) {
 return <div className="w-full h-full container max-w-[1200px] p-4 mx-auto">{children}</div>;
}

export default GlobalLayout;
