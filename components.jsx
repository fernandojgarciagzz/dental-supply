// Shared icons + components
const Icon = {
  Search: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  Cart: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 3h2l.4 2M7 13h10l3-7H6.4M7 13l-1.5-7M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg>,
  Lock: (p) => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
  ArrowRight: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  Plus: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  X: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Check: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="20 6 9 17 4 12"/></svg>,
  Menu: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  User: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  ChevronRight: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="9 18 15 12 9 6"/></svg>,
  Trash: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>,
  Clock: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
};

// Official WhatsApp logo (per brand guidelines - white icon)
const WhatsAppLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
    <path d="M16.04 3C9.07 3 3.4 8.66 3.4 15.62c0 2.45.71 4.81 2.04 6.84L3 29l6.74-2.36a12.6 12.6 0 006.3 1.68h.01c6.97 0 12.63-5.66 12.63-12.62A12.55 12.55 0 0024.96 6.7 12.54 12.54 0 0016.04 3zm0 23.05h-.01a10.5 10.5 0 01-5.34-1.46l-.38-.23-3.99 1.4 1.36-3.89-.25-.4a10.36 10.36 0 01-1.59-5.54c0-5.79 4.72-10.5 10.5-10.5 2.81 0 5.44 1.09 7.42 3.08a10.42 10.42 0 013.07 7.43c0 5.79-4.72 10.5-10.5 10.5zm5.76-7.86c-.32-.16-1.86-.92-2.15-1.02-.29-.1-.5-.16-.71.16-.21.32-.81 1.02-.99 1.23-.18.21-.36.24-.68.08-.32-.16-1.33-.49-2.54-1.57a9.55 9.55 0 01-1.76-2.19c-.18-.32-.02-.49.14-.65.14-.14.32-.36.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.39 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.86-.76 2.12-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37z"/>
  </svg>
);

// Category icon set - geometric abstractions, NOT realistic illustrations
const CatIcon = ({ kind }) => {
  const props = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  const map = {
    restoration: <svg {...props}><rect x="4" y="6" width="16" height="3" rx="1.5"/><rect x="4" y="11" width="16" height="3" rx="1.5"/><rect x="4" y="16" width="10" height="3" rx="1.5"/></svg>,
    tool: <svg {...props}><path d="M7 3l4 4-8 8v4h4l8-8 4 4"/><path d="M14 6l4 4"/></svg>,
    syringe: <svg {...props}><path d="M3 21l3-3"/><path d="M6 18l4-4 4 4-4 4z" transform="rotate(45 10 18)"/><path d="M14 4l6 6"/><path d="M17 1l6 6"/></svg>,
    endo: <svg {...props}><line x1="6" y1="3" x2="6" y2="21"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="18" y1="3" x2="18" y2="21"/><path d="M3 8h18M3 14h18"/></svg>,
    ortho: <svg {...props}><rect x="3" y="9" width="4" height="6" rx="1"/><rect x="10" y="9" width="4" height="6" rx="1"/><rect x="17" y="9" width="4" height="6" rx="1"/><line x1="7" y1="12" x2="10" y2="12"/><line x1="14" y1="12" x2="17" y2="12"/></svg>,
    xray: <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 8l8 8M16 8l-8 8"/></svg>,
    glove: <svg {...props}><path d="M6 12V8a2 2 0 014 0v3M10 11V6a2 2 0 014 0v5M14 11V7a2 2 0 014 0v6c0 4-3 8-7 8s-7-2.5-7-6"/></svg>,
    steril: <svg {...props}><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2"/></svg>,
    chair: <svg {...props}><rect x="3" y="6" width="18" height="6" rx="2"/><path d="M7 12v8M17 12v8M5 20h14"/></svg>,
    lab: <svg {...props}><path d="M9 3v8l-5 9a2 2 0 002 3h12a2 2 0 002-3l-5-9V3"/><line x1="7" y1="3" x2="17" y2="3"/></svg>,
    brush: <svg {...props}><path d="M3 21l9-9"/><path d="M14 4l6 6-3 3-6-6z"/></svg>,
    implant: <svg {...props}><path d="M12 3v6"/><path d="M9 9h6l-1 4h-4z"/><path d="M11 13v3M13 13v3M11 16h2v3l-1 2-1-2z"/></svg>,
  };
  return map[kind] || map.tool;
};

function getCatIcon(catId) {
  const cat = (window.DS_CATEGORIES || []).find(c => c.id === catId);
  return cat ? cat.icon : 'tool';
}

// Image placeholder for products - mono explainer
const Img = ({ label = 'product shot', style }) => (
  <div className="imgph" style={style}>{label}</div>
);

// --- App store (cart + auth) ---
const store = (() => {
  const k = { cart: 'ds_cart_v1', auth: 'ds_auth_v1', user: 'ds_user_v1', quotes: 'ds_quotes_v1' };
  const get = (key, fallback) => {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
  };
  const set = (key, v) => localStorage.setItem(key, JSON.stringify(v));
  return {
    getCart: () => get(k.cart, []),
    setCart: (c) => set(k.cart, c),
    getAuth: () => get(k.auth, false),
    setAuth: (v) => set(k.auth, v),
    getUser: () => get(k.user, null),
    setUser: (u) => set(k.user, u),
    getQuotes: () => get(k.quotes, []),
    addQuote: (q) => { const all = get(k.quotes, []); all.unshift(q); set(k.quotes, all); },
    clear: () => { Object.values(k).forEach(key => localStorage.removeItem(key)); },
  };
})();

// Pub/sub for store changes
const bus = (() => {
  const subs = new Set();
  return { sub: (fn) => { subs.add(fn); return () => subs.delete(fn); }, emit: () => subs.forEach(fn => fn()) };
})();

// React hook to subscribe to store
function useStore() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => bus.sub(force), []);
  return {
    cart: store.getCart(),
    auth: store.getAuth(),
    user: store.getUser(),
    quotes: store.getQuotes(),
    addToCart: (product, qty = 1) => {
      const cart = store.getCart();
      const existing = cart.find(i => i.id === product.id);
      if (existing) existing.qty += qty;
      else cart.push({ id: product.id, sku: product.sku, name: product.name, linea: product.linea, category: product.category, qty });
      store.setCart(cart);
      bus.emit();
      window.showToast && window.showToast('Agregado al carrito');
    },
    updateQty: (id, qty) => {
      const cart = store.getCart();
      const item = cart.find(i => i.id === id);
      if (item) item.qty = Math.max(1, qty);
      store.setCart(cart);
      bus.emit();
    },
    removeFromCart: (id) => {
      store.setCart(store.getCart().filter(i => i.id !== id));
      bus.emit();
    },
    clearCart: () => { store.setCart([]); bus.emit(); },
    login: (user) => { store.setAuth(true); store.setUser(user); bus.emit(); },
    logout: () => { store.setAuth(false); store.setUser(null); bus.emit(); },
    submitQuote: (notes) => {
      const cart = store.getCart();
      const id = 'COT-2026-' + String(Math.floor(Math.random()*9000)+1000);
      store.addQuote({ id, date: new Date().toISOString().slice(0,10), items: cart.reduce((a,c)=>a+c.qty,0), status: 'pending' });
      bus.emit();
      return id;
    },
  };
}

// Router: hash-based, simple
function useRoute() {
  const [route, setRoute] = React.useState(() => parseHash());
  React.useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}
function parseHash() {
  const h = window.location.hash.replace(/^#\/?/, '') || 'home';
  const [path, query] = h.split('?');
  const parts = path.split('/');
  const params = {};
  if (query) query.split('&').forEach(kv => { const [k, v] = kv.split('='); params[k] = decodeURIComponent(v || ''); });
  return { name: parts[0], parts, params };
}
function navigate(path) {
  window.location.hash = '#/' + path.replace(/^\//, '');
  window.scrollTo(0, 0);
}

// --- Top nav ---
function TopNav({ minimal }) {
  const s = useStore();
  const route = useRoute();
  const cartCount = s.cart.reduce((a, c) => a + c.qty, 0);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [q, setQ] = React.useState('');
  const [ddOpen, setDdOpen] = React.useState(false);
  const inputRef = React.useRef();

  const [results, setResults] = React.useState([]);
  React.useEffect(() => {
    if (!q || q.length < 2) { setResults([]); return; }
    const timer = setTimeout(async () => {
      const pattern = '%' + q + '%';
      const { data } = await window.supabase.from('products')
        .select('id,sku,name,category,linea')
        .or('name.ilike.' + pattern + ',sku.ilike.' + pattern)
        .limit(6)
        .execute();
      setResults(data || []);
    }, 250);
    return () => clearTimeout(timer);
  }, [q]);

  return (
    <header className="topnav" data-screen-label="Top Nav">
      <div className="container topnav-inner">
        <a className="brand-mark" onClick={(e) => { e.preventDefault(); navigate('home'); }} href="#/home" style={{cursor:'pointer'}} title="Volver al inicio">
          <img src="assets/logo.png" alt="Dental Supply c&m" />
        </a>

        {!minimal && (
          <div className="search-shell" style={{position:'relative'}}>
            <Icon.Search className="search-ic" />
            <input
              ref={inputRef}
              className="input"
              placeholder={'Buscar entre ' + (window.DS_TOTAL_PRODUCTS ? window.DS_TOTAL_PRODUCTS.toLocaleString('es-MX') : '5,900') + '+ productos...'}
              value={q}
              onChange={e => { setQ(e.target.value); setDdOpen(true); }}
              onFocus={() => setDdOpen(true)}
              onBlur={() => setTimeout(() => setDdOpen(false), 200)}
              onKeyDown={e => { if (e.key === 'Enter' && q) { navigate('catalog?q=' + encodeURIComponent(q)); setDdOpen(false); }}}
            />
            {ddOpen && results.length > 0 && (
              <div className="search-dd">
                <div className="grp-h">Productos</div>
                {results.map(p => (
                  <div key={p.id} className="res" onMouseDown={() => { navigate('product/' + p.id); setDdOpen(false); setQ(''); }}>
                    <Img label={p.sku} />
                    <div style={{flex:1, minWidth:0}}>
                      <div className="n" style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{p.name}</div>
                      <div className="m">{p.linea} · {p.sku}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {ddOpen && q.length >= 2 && results.length === 0 && (
              <div className="search-dd">
                <div style={{padding:'14px 16px', fontSize: 13, color: 'var(--text-2)'}}>
                  Sin resultados para "{q}". Prueba con otro término o <a href="#/catalog" style={{color:'var(--primary)',fontWeight:600}}>explora el catálogo</a>.
                </div>
              </div>
            )}
          </div>
        )}

        <div className="row aic gap-8">
          {!s.auth && !minimal && (
            <>
              <button className="btn btn-ghost btn-sm desktop-only" onClick={() => navigate('login')}>Iniciar sesión</button>
              <button className="btn btn-primary btn-sm desktop-only" onClick={() => navigate('login?tab=register')}>Crear cuenta</button>
            </>
          )}
          {s.auth && (
            <>
              <button className="btn btn-ghost btn-icon" onClick={() => navigate('account')} aria-label="Mi cuenta">
                <Icon.User />
              </button>
              <button className="btn btn-ghost btn-icon cart-trigger" onClick={() => navigate('cart')} aria-label="Carrito">
                <Icon.Cart />
                {cartCount > 0 && <span className="badge-count">{cartCount}</span>}
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div>
          <img src="assets/logo.png" alt="" style={{height: 36, marginBottom: 14}} />
          <p style={{maxWidth: 280, lineHeight: 1.55, fontSize: 13}}>
            Equipos e insumos odontológicos en Monterrey. Servicio a domicilio, más de 5,900 productos para tu consultorio.
          </p>
        </div>
        <div>
          <h5>Catálogo</h5>
          <a href="#/catalog?cat=restauracion">Restauración</a>
          <a href="#/catalog?cat=instrumental">Instrumental</a>
          <a href="#/catalog?cat=endodoncia">Endodoncia</a>
          <a href="#/catalog?cat=ortodoncia">Ortodoncia</a>
          <a href="#/catalog">Ver todo</a>
        </div>
        <div>
          <h5>Contacto</h5>
          <p>{window.DS_CONTACT.address}<br/>{window.DS_CONTACT.colony}<br/>{window.DS_CONTACT.city}</p>
          <p>Tel: {window.DS_CONTACT.phone}<br/>WA: {window.DS_CONTACT.whatsapp}</p>
          <p>{window.DS_CONTACT.hoursWeek}<br/>{window.DS_CONTACT.hoursSat}</p>
        </div>
        <div>
          <h5>Legal</h5>
          <a href="#">Aviso de privacidad</a>
          <a href="#">Términos y condiciones</a>
          <a href="#">Política de envíos</a>
          <a href="#">Facturación</a>
        </div>
        <div className="copy" style={{gridColumn: '1 / -1'}}>
          <span>© 2026 Dental Supply c&amp;m · Proveedora Odontológica S.A. de C.V.</span>
          <span>Hecho en Monterrey, MX</span>
        </div>
      </div>
    </footer>
  );
}

// Toast manager
function ToastHost() {
  const [msg, setMsg] = React.useState(null);
  React.useEffect(() => {
    window.showToast = (m) => {
      setMsg(m);
      clearTimeout(window._toastT);
      window._toastT = setTimeout(() => setMsg(null), 2200);
    };
  }, []);
  return (
    <div className={'toast' + (msg ? ' show' : '')}>
      <span className="ic"><Icon.Check /></span>
      {msg}
    </div>
  );
}

// --- Product card ---
function ProductCard({ product }) {
  const s = useStore();
  const catLabel = (window.DS_CATEGORIES.find(c => c.id === product.category) || {}).short || product.category;
  return (
    <div className="product-card" onClick={() => navigate('product/' + product.id)}>
      <Img label={product.sku} />
      <div className="tag-brand">{product.linea || catLabel}</div>
      <div className="pname">{product.name}</div>
      <div className="psku">SKU · {product.sku}</div>
      <div className="pfoot">
        {s.auth ? (
          <span className="lock-pill" style={{background:'transparent', padding:0}}>
            <Icon.Lock /> Precio en cotización
          </span>
        ) : (
          <span className="lock-pill"><Icon.Lock /> Crea cuenta</span>
        )}
        <button
          className="btn btn-secondary btn-sm"
          onClick={(e) => {
            e.stopPropagation();
            if (!s.auth) { window.showToast && window.showToast('Crea tu cuenta para armar tu pedido'); return navigate('login?tab=register'); }
            s.addToCart(product);
          }}
        >
          <Icon.Plus /> Agregar
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { Icon, WhatsAppLogo, CatIcon, getCatIcon, Img, store, bus, useStore, useRoute, parseHash, navigate, TopNav, Footer, ToastHost, ProductCard });
