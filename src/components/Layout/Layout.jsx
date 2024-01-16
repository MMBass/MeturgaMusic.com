
// Shared layout for all pages
function Layout({className, children}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Layout;
