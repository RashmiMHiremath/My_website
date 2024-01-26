import React from "react";

const Layout = ({ children, classname = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-wallpaper bg-no-repeat bg-cover p-32 dark:bg-bgwall xl:p-24 lg:p-16  md:p-12 sm:p-8 ${classname}`}
      style={{ border: "none", background: "none" }}
    >
      {children}
    </div>
  );
};

export default Layout;
