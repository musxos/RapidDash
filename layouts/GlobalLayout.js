import React from 'react';

function GlobalLayout({ children }) {
 return <div className="w-full h-full container max-w-screen p-4 mx-auto gap-4 flex flex-col">{children}</div>;
}

export default GlobalLayout;
