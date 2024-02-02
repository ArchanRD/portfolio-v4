import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="ml-7 pl-5 mr-5 md:pr-0 md:max-w-2xl bg-dot !bg-repeat !bg-5 border-l-2 border-black mx-auto xl:max-w-7xl xl:mx-auto mobile-480:w-[480px] mobile-480:mx-auto sm:w-full lg:max-w-5xl lg:mx-20 lg:w-auto  lg:bg-contain xl:bg-cover xl:px-4">
      {children}
    </div>
  );
};

export default Layout;
