// Main App
function App() {
  const route = useRoute();
  const name = route.name;

  let page;
  if (name === 'login') page = <LoginPage />;
  else if (name === 'catalog') page = <CatalogPage />;
  else if (name === 'product') page = <ProductPage />;
  else if (name === 'cart') page = <CartPage />;
  else if (name === 'account') page = <AccountPage />;
  else page = <LandingPage />;

  return (
    <>
      {page}
      <ToastHost />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
