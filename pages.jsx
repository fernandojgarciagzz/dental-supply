// Pages: Landing, Login, Catalog, Product, Cart, Account

// ============ LANDING ============
function LandingPage() {
  const s = useStore();
  const cats = window.DS_CATEGORIES;

  return (
    <div data-screen-label="01 Landing">
      <TopNav />

      <section className="hero-wrap">
        <div className="hero">
          <div className="caps" style={{marginBottom: 20, color: 'var(--primary)'}}>● Depósito Dental en Monterrey, MX</div>
          <h1>Tu depósito dental,<br/><em>ahora en línea.</em></h1>
          <p className="sub">
            Olvida los catálogos PDF y los pedidos uno por uno. Arma tu lista en línea y recibe cotización personalizada por WhatsApp, con la atención de un asesor real.
          </p>
          <div className="row gap-12">
            {s.auth ? (
              <>
                <button className="btn btn-primary btn-lg" onClick={() => navigate('catalog')}>Ir al catálogo <Icon.ArrowRight /></button>
                <button className="btn btn-ghost btn-lg" onClick={() => navigate('account')}>Mi cuenta</button>
              </>
            ) : (
              <>
                <button className="btn btn-primary btn-lg" onClick={() => navigate('login?tab=register')}>Crear cuenta gratis</button>
                <button className="btn btn-ghost btn-lg" onClick={() => navigate('login')}>Iniciar sesión <Icon.ArrowRight /></button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="steps">
        <div className="container" style={{marginBottom: 40}}>
          <div className="caps" style={{color:'var(--text-3)'}}>Cómo funciona</div>
          <h2 style={{fontSize: 30, letterSpacing: '-0.6px', marginTop: 8, maxWidth: 600}}>De catálogo a cotización en tres pasos.</h2>
        </div>
        <div className="steps-grid">
          <div className="step">
            <div className="num">01 / EXPLORA</div>
            <h3>Explora el catálogo</h3>
            <p>Navega por categoría o busca por nombre o SKU entre más de 5,900 productos. Filtros precisos para encontrar exactamente lo que necesitas.</p>
          </div>
          <div className="step">
            <div className="num">02 / ARMA TU LISTA</div>
            <h3>Agrega al carrito</h3>
            <p>Construye tu pedido con la cantidad exacta de cada producto. Sin compromiso — el carrito se convierte en solicitud de cotización.</p>
          </div>
          <div className="step">
            <div className="num">03 / COTIZA POR WHATSAPP</div>
            <h3>Cotiza por WhatsApp</h3>
            <p>Envías tu lista con un toque. Un asesor te responde con precios, disponibilidad y opciones de envío en menos de 2 horas.</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container" style={{padding: '80px 24px'}}>
        <div className="between" style={{marginBottom: 28}}>
          <div>
            <div className="caps" style={{color: 'var(--text-3)'}}>Categorías</div>
            <h2 style={{fontSize: 28, letterSpacing: '-0.5px', marginTop: 6}}>Todo lo que tu consultorio necesita.</h2>
          </div>
          <button className="btn btn-ghost desktop-only" onClick={() => navigate('catalog')}>Ver catálogo completo <Icon.ArrowRight /></button>
        </div>
        <div className="cat-grid">
          {cats.slice(0, 8).map(c => (
            <div className="cat-card" key={c.id} onClick={() => navigate('catalog?cat=' + c.id)}>
              <Icon.Lock className="lock" />
              <div className="ic"><CatIcon kind={c.icon} /></div>
              <h4>{c.name}</h4>
              <div className="cnt">{c.desc}</div>
              <div className="cta">Ver productos <Icon.ChevronRight /></div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section style={{background: '#fff', borderTop: '0.5px solid var(--border)', borderBottom: '0.5px solid var(--border)'}}>
        <div className="container">
          <div className="trust-strip" style={{justifyContent: 'space-between'}}>
            <div className="item"><span className="dot"/> Envíos a todo México</div>
            <div className="item"><span className="dot"/> Crédito a 30 días con aprobación</div>
            <div className="item"><span className="dot"/> Facturación electrónica inmediata</div>
            <div className="item"><span className="dot"/> Asesoría técnica especializada</div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      {!s.auth && (
      <section className="container" style={{padding: '80px 24px'}}>
        <div className="card-lg card" style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap: 32, alignItems:'center', padding: 40}}>
          <div>
            <div className="caps" style={{color:'var(--primary)'}}>Crea tu cuenta</div>
            <h2 style={{fontSize: 30, letterSpacing:'-0.5px', margin: '8px 0 12px'}}>Crea tu cuenta para acceder a precios especiales.</h2>
            <p style={{color:'var(--text-2)', fontSize: 15.5, maxWidth: 520, margin: '0 0 24px'}}>
              Los precios al mayoreo, historial de cotizaciones y atención personalizada por tu asesor están detrás de una cuenta gratuita. Sin tarjetas, sin compromisos.
            </p>
            <div className="row gap-12">
              <button className="btn btn-primary btn-lg" onClick={() => navigate('login?tab=register')}>Crear cuenta</button>
              <button className="btn btn-secondary btn-lg" onClick={() => navigate('login')}>Ya tengo cuenta</button>
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap: 8}}>
            <BenefitRow label="Historial de cotizaciones" value="Repedido en 1 toque"/>
            <BenefitRow label="Precios especiales" value="Negociados por volumen"/>
            <BenefitRow label="Atención dedicada" value="Asesor asignado"/>
            <BenefitRow label="Crédito empresarial" value="30 días disponibles"/>
          </div>
        </div>
      </section>
      )}

      <Footer />
    </div>
  );
}
function BenefitRow({ label, value }) {
  return (
    <div style={{display:'flex', justifyContent:'space-between', padding:'14px 0', borderBottom:'0.5px solid var(--border)', fontSize: 14}}>
      <span style={{color:'var(--text-2)'}}>{label}</span>
      <span style={{fontWeight: 600}}>{value}</span>
    </div>
  );
}

// ============ LOGIN ============
function LoginPage() {
  const s = useStore();
  const route = useRoute();
  const [tab, setTab] = React.useState(route.params.tab === 'register' ? 'register' : 'login');
  const [form, setForm] = React.useState({});
  const [err, setErr] = React.useState('');

  const submit = (e) => {
    e.preventDefault();
    setErr('');
    if (tab === 'login') {
      if (!form.email || !form.password) return setErr('Completa correo y contraseña.');
      s.login({ name: 'Dr. Alejandro Martínez', email: form.email, clinic: 'Clínica Dental Vista Real' });
    } else {
      if (!form.name || !form.email || !form.phone || !form.clinic || !form.password) return setErr('Completa los campos obligatorios.');
      s.login({ name: form.name, email: form.email, phone: form.phone, clinic: form.clinic });
    }
    navigate('catalog');
  };

  return (
    <div data-screen-label="02 Login / Register">
      <TopNav minimal />
      <div className="auth-shell">
        <div className="auth-card">
          <h2 style={{fontSize: 22, marginBottom: 4}}>{tab === 'login' ? 'Bienvenido de vuelta' : 'Crea tu cuenta'}</h2>
          <p className="muted" style={{fontSize: 14, marginBottom: 20}}>
            {tab === 'login' ? 'Accede a tus cotizaciones y precios especiales.' : 'Toma menos de un minuto. No pediremos tarjetas.'}
          </p>

          <div className="auth-tabs">
            <button className={tab === 'login' ? 'active' : ''} onClick={() => setTab('login')}>Iniciar sesión</button>
            <button className={tab === 'register' ? 'active' : ''} onClick={() => setTab('register')}>Crear cuenta</button>
          </div>

          <form onSubmit={submit} className="col gap-16">
            {tab === 'register' && (
              <div className="field">
                <label>Nombre completo</label>
                <input className="input" placeholder="Dr. Alejandro Martínez" value={form.name || ''} onChange={e => setForm({...form, name: e.target.value})}/>
              </div>
            )}
            <div className="field">
              <label>Correo electrónico</label>
              <input className="input" type="email" placeholder="tucorreo@consultorio.mx" value={form.email || ''} onChange={e => setForm({...form, email: e.target.value})}/>
            </div>
            {tab === 'register' && (
              <>
                <div className="field">
                  <label>Teléfono WhatsApp</label>
                  <input className="input" placeholder="+52 81 1234 5678" value={form.phone || ''} onChange={e => setForm({...form, phone: e.target.value})}/>
                </div>
                <div className="field">
                  <label>Nombre del consultorio / empresa</label>
                  <input className="input" placeholder="Clínica Dental Vista Real" value={form.clinic || ''} onChange={e => setForm({...form, clinic: e.target.value})}/>
                </div>
                <div className="field">
                  <label>RFC <span className="muted" style={{fontSize: 12, fontWeight: 400}}>(opcional, para facturación)</span></label>
                  <input className="input" placeholder="MARC850315XXX" value={form.rfc || ''} onChange={e => setForm({...form, rfc: e.target.value})}/>
                </div>
              </>
            )}
            <div className="field">
              <label>Contraseña</label>
              <input className="input" type="password" placeholder="Mínimo 8 caracteres" value={form.password || ''} onChange={e => setForm({...form, password: e.target.value})}/>
            </div>

            {tab === 'login' && (
              <div style={{display:'flex', justifyContent:'flex-end', marginTop: -8}}>
                <a href="#" style={{fontSize: 13, color: 'var(--primary)', fontWeight: 500}}>¿Olvidaste tu contraseña?</a>
              </div>
            )}

            {err && <div style={{background:'#fdecea', color:'var(--danger)', padding:'10px 12px', borderRadius: 8, fontSize: 13}}>{err}</div>}

            <button type="submit" className="btn btn-primary btn-full btn-lg">
              {tab === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
            </button>

            {tab === 'register' && (
              <p className="muted" style={{fontSize: 12.5, textAlign:'center', lineHeight: 1.6, margin: 0}}>
                Al crear tu cuenta obtienes acceso a precios, historial de cotizaciones y atención personalizada de un asesor.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

// ============ CATALOG ============
function CatalogPage() {
  const s = useStore();
  const route = useRoute();
  const cats = window.DS_CATEGORIES;

  const [selectedCat, setSelectedCat] = React.useState(route.params.cat || null);
  const [sort, setSort] = React.useState('name');
  const [page, setPage] = React.useState(1);
  const [q, setQ] = React.useState(route.params.q || '');
  const [products, setProducts] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [catCounts, setCatCounts] = React.useState(window.DS_CATEGORY_COUNTS || {});
  const perPage = 24;

  React.useEffect(() => {
    if (!s.auth) navigate('login');
  }, [s.auth]);

  React.useEffect(() => {
    setSelectedCat(route.params.cat || null);
    setQ(route.params.q || '');
    setPage(1);
  }, [route.params.cat, route.params.q]);

  // Update counts when loaded
  React.useEffect(() => {
    if (window.DS_PRODUCTS_LOADED) {
      setCatCounts({...window.DS_CATEGORY_COUNTS});
    } else {
      window._onProductCountsLoaded = () => setCatCounts({...window.DS_CATEGORY_COUNTS});
    }
  }, []);

  // Fetch products from Supabase
  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      const from = (page - 1) * perPage;
      const to = from + perPage - 1;
      let query = window.supabase.from('products').select('*').range(from, to);

      if (selectedCat) query = query.eq('category', selectedCat);
      if (q) {
        const pattern = '%' + q + '%';
        query = query.or('name.ilike.' + pattern + ',sku.ilike.' + pattern);
      }

      const orderCol = sort === 'newest' ? 'created_at' : sort === 'linea' ? 'linea' : 'name';
      const ascending = sort !== 'newest';
      query = query.order(orderCol, { ascending });

      const { data, total } = await query.execute();
      if (!cancelled) {
        setProducts(data || []);
        setTotalCount(total || 0);
        setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [selectedCat, q, sort, page]);

  const totalPages = Math.max(1, Math.ceil(totalCount / perPage));
  const activeCat = cats.find(c => c.id === selectedCat);
  const grandTotal = window.DS_TOTAL_PRODUCTS || Object.values(catCounts).reduce((a, b) => a + b, 0);

  // Pagination helper: show pages around current
  const pageNumbers = React.useMemo(() => {
    const pages = [];
    const start = Math.max(1, page - 2);
    const end = Math.min(totalPages, start + 4);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }, [page, totalPages]);

  return (
    <div data-screen-label="03 Catalog">
      <TopNav />

      <div className="catalog-shell">
        <aside className="sidebar">
          <h4>Categorías</h4>
          <div className="side-list">
            <div className={'side-row ' + (!selectedCat ? 'active' : '')} onClick={() => { setSelectedCat(null); setPage(1); }}>
              <span>Todo el catálogo</span>
              <span className="count">{grandTotal ? grandTotal.toLocaleString('es-MX') : '...'}</span>
            </div>
            {cats.map(c => (
              <div key={c.id} className={'side-row ' + (selectedCat === c.id ? 'active' : '')} onClick={() => { setSelectedCat(c.id); setPage(1); }}>
                <span>{c.short}</span>
                <span className="count">{catCounts[c.id] != null ? catCounts[c.id].toLocaleString('es-MX') : '...'}</span>
              </div>
            ))}
          </div>
        </aside>

        <main>
          <div style={{marginBottom: 20}}>
            <div className="caps" style={{color:'var(--text-3)'}}>{activeCat ? activeCat.short : (q ? 'Búsqueda' : 'Catálogo completo')}</div>
            <h1 style={{fontSize: 26, letterSpacing:'-0.5px', marginTop: 6}}>
              {activeCat ? activeCat.name : (q ? `Resultados para "${q}"` : 'Todos los productos')}
            </h1>
            {activeCat && <p className="muted" style={{fontSize: 14, marginTop: 4}}>{activeCat.desc}</p>}
          </div>

          <div className="filter-bar">
            {selectedCat && (
              <span className="pill">
                {activeCat.short}
                <button onClick={() => setSelectedCat(null)}><Icon.X /></button>
              </span>
            )}
            {q && (
              <span className="pill">
                "{q}"
                <button onClick={() => { setQ(''); navigate('catalog'); }}><Icon.X /></button>
              </span>
            )}
            <div style={{flex: 1}}/>
            <span className="muted" style={{fontSize: 13}}>{totalCount.toLocaleString('es-MX')} productos</span>
            <select className="sort-select" value={sort} onChange={e => { setSort(e.target.value); setPage(1); }}>
              <option value="name">Ordenar: Nombre</option>
              <option value="newest">Más recientes</option>
              <option value="linea">Línea / Proveedor</option>
            </select>
          </div>

          {loading ? (
            <div className="card" style={{textAlign:'center', padding: 64}}>
              <div style={{fontSize: 15, color: 'var(--text-2)'}}>Cargando productos...</div>
            </div>
          ) : products.length === 0 ? (
            <div className="card" style={{textAlign:'center', padding: 64}}>
              <div style={{fontSize: 16, fontWeight: 600, marginBottom: 6}}>No encontramos productos con esos filtros.</div>
              <p className="muted" style={{fontSize: 14, marginBottom: 16}}>Prueba quitar algún filtro o buscar por nombre o SKU.</p>
              <button className="btn btn-secondary" onClick={() => { setSelectedCat(null); setQ(''); navigate('catalog'); }}>Limpiar filtros</button>
            </div>
          ) : (
            <>
              <div className="product-grid">
                {products.map(p => <ProductCard product={p} key={p.id} />)}
              </div>
              {totalPages > 1 && (
                <div className="pager">
                  <button disabled={page === 1} onClick={() => setPage(page - 1)}>‹</button>
                  {pageNumbers[0] > 1 && <span style={{padding:'0 4px', color:'var(--text-3)'}}>...</span>}
                  {pageNumbers.map(n => (
                    <button key={n} className={n === page ? 'active' : ''} onClick={() => setPage(n)}>{n}</button>
                  ))}
                  {pageNumbers[pageNumbers.length - 1] < totalPages && <span style={{padding:'0 4px', color:'var(--text-3)'}}>...</span>}
                  <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>›</button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

// ============ PRODUCT DETAIL ============
function ProductPage() {
  const s = useStore();
  const route = useRoute();
  const id = route.parts[1];
  const [product, setProduct] = React.useState(null);
  const [related, setRelated] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [qty, setQty] = React.useState(1);

  React.useEffect(() => {
    if (!s.auth) navigate('login');
  }, [s.auth]);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      const { data } = await window.supabase.from('products').select('*').eq('id', id).limit(1).execute();
      if (cancelled) return;
      const p = data && data[0];
      setProduct(p);
      if (p) {
        const { data: rel } = await window.supabase.from('products')
          .select('*')
          .eq('category', p.category)
          .limit(5)
          .execute();
        if (!cancelled) setRelated((rel || []).filter(r => r.id !== p.id).slice(0, 4));
      }
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [id]);

  if (loading) {
    return (<div><TopNav /><div className="container" style={{padding: 80, textAlign:'center'}}><div style={{fontSize: 15, color: 'var(--text-2)'}}>Cargando producto...</div></div></div>);
  }

  if (!product) {
    return (
      <div><TopNav /><div className="container" style={{padding: 80, textAlign:'center'}}>
        <h2>Producto no encontrado</h2>
        <button className="btn btn-primary" style={{marginTop: 16}} onClick={() => navigate('catalog')}>Volver al catálogo</button>
      </div></div>
    );
  }

  const catInfo = window.DS_CATEGORIES.find(c => c.id === product.category) || {};
  const specs = [
    ['SKU', product.sku],
    ['Línea', product.linea],
    product.modelo && ['Modelo', product.modelo],
    product.talla && ['Talla', product.talla],
    product.color && ['Color', product.color],
    product.sku_alt && ['Clave alterna', product.sku_alt],
    ['Categoría', catInfo.name || product.category],
    ['Existencias', product.stock > 0 ? 'Disponible' : 'Sobre pedido'],
  ].filter(Boolean);

  return (
    <div data-screen-label="04 Product Detail">
      <TopNav />

      <div className="container" style={{padding: '20px 24px 0'}}>
        <div style={{fontSize: 12.5, color: 'var(--text-3)', display:'flex', gap: 6, alignItems:'center'}}>
          <a href="#/catalog" style={{color:'var(--text-3)'}}>Catálogo</a>
          <Icon.ChevronRight />
          <a href={'#/catalog?cat=' + product.category} style={{color:'var(--text-3)'}}>{catInfo.short || product.category}</a>
          <Icon.ChevronRight />
          <span>{product.sku}</span>
        </div>
      </div>

      <div className="pdp">
        <div className="gallery">
          <Img label={product.sku} style={{aspectRatio: '1/1', borderRadius: 8}}/>
        </div>

        <div>
          <div className="tag-brand" style={{marginBottom: 8}}>{product.linea || catInfo.short}</div>
          <h1 style={{fontSize: 28, letterSpacing:'-0.5px', lineHeight: 1.15, marginBottom: 10}}>{product.name}</h1>
          <div style={{fontSize: 13, color: 'var(--text-3)', marginBottom: 20}}>SKU · {product.sku}</div>

          <h4 className="caps" style={{marginBottom: 8, color: 'var(--text-3)'}}>Especificaciones</h4>
          <div style={{marginBottom: 28}}>
            {specs.map(([k, v]) => (
              <div className="spec-row" key={k}>
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </div>
            ))}
          </div>

          <div className="card" style={{padding: 18, background: 'var(--bg)', border: 0}}>
            <div className="lock-pill" style={{background: 'transparent', padding: 0, marginBottom: 4, fontWeight: 600, color: 'var(--text-1)'}}>
              <Icon.Lock /> Precio disponible en cotización
            </div>
            <p className="muted" style={{fontSize: 13, margin: '0 0 16px'}}>
              Agrégalo a tu lista y recibe el mejor precio según volumen por WhatsApp.
            </p>
            <div className="row aic gap-12">
              <div className="qty">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span className="v">{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <button className="btn btn-primary btn-lg" style={{flex: 1}} onClick={() => s.addToCart(product, qty)}>
                <Icon.Plus /> Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="container" style={{padding: '64px 24px'}}>
          <div className="between" style={{marginBottom: 20}}>
            <h2 style={{fontSize: 22}}>Productos relacionados</h2>
            <a href={'#/catalog?cat=' + product.category} style={{fontSize: 14, color: 'var(--primary)', fontWeight: 600}}>Ver toda la categoría →</a>
          </div>
          <div className="product-grid" style={{gridTemplateColumns: 'repeat(4, 1fr)'}}>
            {related.map(p => <ProductCard product={p} key={p.id} />)}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

// ============ CART / QUOTATION ============
function CartPage() {
  const s = useStore();
  const [notes, setNotes] = React.useState('');
  const [submitted, setSubmitted] = React.useState(null);

  React.useEffect(() => {
    if (!s.auth) navigate('login');
  }, [s.auth]);

  const sendWhatsApp = () => {
    const items = s.cart.map(i => `• ${i.qty}× ${i.name} (SKU ${i.sku})`).join('\n');
    const msg = encodeURIComponent(
      `Hola, soy ${s.user?.name || 'cliente'} de ${s.user?.clinic || 'mi consultorio'}.\n\n` +
      `Solicito cotización de los siguientes productos:\n\n${items}\n\n` +
      (notes ? `Notas: ${notes}\n\n` : '') +
      `Enviado desde Dental Supply c&m`
    );
    const id = s.submitQuote(notes);
    setSubmitted(id);
    s.clearCart();
    window.open(`https://wa.me/528120026642?text=${msg}`, '_blank');
  };

  if (submitted) {
    return (
      <div data-screen-label="05 Cart - Submitted">
        <TopNav />
        <div className="cart-shell">
          <div className="card-lg card" style={{textAlign:'center', padding: 48}}>
            <div style={{width: 64, height: 64, borderRadius: '50%', background: 'var(--primary-50)', color: 'var(--primary)', display:'inline-flex', alignItems:'center', justifyContent:'center', marginBottom: 20}}>
              <Icon.Check style={{width: 28, height: 28}}/>
            </div>
            <h1 style={{fontSize: 24, marginBottom: 8}}>Solicitud enviada</h1>
            <p className="muted" style={{maxWidth: 380, margin: '0 auto 20px', fontSize: 14}}>
              Tu cotización <strong style={{color:'var(--text-1)'}}>{submitted}</strong> está en manos de un asesor. Te responde por WhatsApp en menos de 2 horas hábiles.
            </p>
            <div className="row gap-8 center">
              <button className="btn btn-secondary" onClick={() => navigate('account')}>Ver mis cotizaciones</button>
              <button className="btn btn-primary" onClick={() => navigate('catalog')}>Seguir explorando</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div data-screen-label="05 Cart">
      <TopNav />
      <div className="cart-shell">
        <div style={{marginBottom: 28}}>
          <div className="caps" style={{color:'var(--text-3)'}}>Tu lista</div>
          <h1 style={{fontSize: 28, letterSpacing:'-0.5px', marginTop: 6}}>Tu solicitud de cotización</h1>
          <p className="muted" style={{fontSize: 14.5, marginTop: 8, maxWidth: 480}}>
            Revisa los productos, agrega notas si necesitas, y envía a tu asesor por WhatsApp. <strong style={{color:'var(--text-1)'}}>Esto no es un checkout</strong> — recibirás precios por WhatsApp antes de confirmar.
          </p>
        </div>

        {s.cart.length === 0 ? (
          <div className="card cart-empty">
            <div className="ic"><Icon.Cart /></div>
            <h3 style={{fontSize: 16, marginBottom: 6}}>Tu lista está vacía</h3>
            <p className="muted" style={{fontSize: 14, marginBottom: 18, maxWidth: 320, margin: '0 auto 18px'}}>
              Explora el catálogo y agrega los productos que necesitas para tu consultorio.
            </p>
            <button className="btn btn-primary" onClick={() => navigate('catalog')}>Ver catálogo</button>
          </div>
        ) : (
          <>
            <div className="card-lg card" style={{marginBottom: 16}}>
              {s.cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <Img label={item.sku} />
                  <div style={{minWidth: 0}}>
                    <div className="tag-brand" style={{marginBottom: 2}}>{item.linea || 'Producto'}</div>
                    <div className="name">{item.name}</div>
                    <div className="meta">SKU · {item.sku}</div>
                  </div>
                  <div className="ctrls">
                    <div className="qty">
                      <button onClick={() => s.updateQty(item.id, item.qty - 1)}>−</button>
                      <span className="v">{item.qty}</span>
                      <button onClick={() => s.updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                    <button className="btn btn-ghost btn-icon" onClick={() => s.removeFromCart(item.id)} aria-label="Quitar">
                      <Icon.Trash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="field" style={{marginBottom: 24}}>
              <label>Notas para tu asesor <span className="muted" style={{fontWeight: 400}}>(opcional)</span></label>
              <textarea className="textarea" placeholder="Ej: ¿Tienen tono A3? ¿Trabajamos con crédito a 30 días?" value={notes} onChange={e => setNotes(e.target.value)} />
            </div>

            <button className="btn btn-whatsapp btn-full" onClick={sendWhatsApp}>
              <WhatsAppLogo size={22} />
              Solicitar cotización por WhatsApp
            </button>

            <p className="muted" style={{textAlign: 'center', fontSize: 12.5, marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6}}>
              <Icon.Clock /> Un asesor te responde en menos de 2 horas · {window.DS_CONTACT.hoursWeek}
            </p>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

// ============ ACCOUNT ============
function AccountPage() {
  const s = useStore();
  const route = useRoute();
  const [tab, setTab] = React.useState(route.params.tab || 'cotizaciones');

  React.useEffect(() => {
    if (!s.auth) navigate('login');
  }, [s.auth]);

  if (!s.user) return null;

  return (
    <div data-screen-label="06 Account">
      <TopNav />
      <div className="acct-shell">
        <aside>
          <div style={{padding: '0 12px 16px'}}>
            <div className="caps" style={{color:'var(--text-3)'}}>Cuenta</div>
            <div style={{fontSize: 15, fontWeight: 600, marginTop: 6, lineHeight: 1.3}}>{s.user.name}</div>
            <div className="muted" style={{fontSize: 12.5}}>{s.user.clinic}</div>
          </div>
          <nav className="acct-nav">
            <button className={tab === 'cotizaciones' ? 'active' : ''} onClick={() => setTab('cotizaciones')}>Mis cotizaciones</button>
            <button className={tab === 'datos' ? 'active' : ''} onClick={() => setTab('datos')}>Mis datos</button>
            <button className={tab === 'direcciones' ? 'active' : ''} onClick={() => setTab('direcciones')}>Mis direcciones</button>
            <div className="divider" style={{margin: '12px 12px'}}/>
            <button onClick={() => { s.logout(); navigate('home'); }}>Cerrar sesión</button>
          </nav>
        </aside>

        <main>
          {tab === 'cotizaciones' && (
            <div className="card-lg card">
              <div className="between" style={{marginBottom: 16}}>
                <h2 style={{fontSize: 18}}>Mis cotizaciones</h2>
                <span className="muted" style={{fontSize: 13}}>{s.quotes.length} solicitudes</span>
              </div>
              {s.quotes.length === 0 ? (
                <div style={{textAlign:'center', padding: 40}}>
                  <p className="muted" style={{fontSize: 14, marginBottom: 16}}>Aún no tienes cotizaciones. Explora el catálogo para comenzar.</p>
                  <button className="btn btn-primary" onClick={() => navigate('catalog')}>Ir al catálogo</button>
                </div>
              ) : (
                <table className="tbl">
                  <thead>
                    <tr>
                      <th>Fecha</th><th># Cotización</th><th>Productos</th><th>Estado</th><th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {s.quotes.map(q => (
                      <tr key={q.id}>
                        <td style={{color:'var(--text-2)', fontVariantNumeric:'tabular-nums'}}>{q.date}</td>
                        <td style={{fontWeight: 600, fontVariantNumeric:'tabular-nums'}}>{q.id}</td>
                        <td>{q.items} ítems</td>
                        <td>
                          <span className={'status-pill status-' + q.status}>
                            {q.status === 'pending' && 'Pendiente'}
                            {q.status === 'responded' && 'Respondida'}
                            {q.status === 'confirmed' && 'Confirmada'}
                          </span>
                        </td>
                        <td style={{textAlign:'right'}}>
                          <button className="btn btn-ghost btn-sm">Ver detalle <Icon.ChevronRight /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {tab === 'datos' && (
            <div className="card-lg card">
              <h2 style={{fontSize: 18, marginBottom: 16}}>Mis datos</h2>
              <div className="col gap-16" style={{maxWidth: 480}}>
                <div className="field"><label>Nombre completo</label><input className="input" defaultValue={s.user.name}/></div>
                <div className="field"><label>Correo electrónico</label><input className="input" defaultValue={s.user.email}/></div>
                <div className="field"><label>Teléfono WhatsApp</label><input className="input" defaultValue={s.user.phone || '+52 81 1234 5678'}/></div>
                <div className="field"><label>Consultorio / empresa</label><input className="input" defaultValue={s.user.clinic}/></div>
                <div className="field"><label>RFC</label><input className="input" placeholder="MARC850315XXX"/></div>
                <div className="row gap-8">
                  <button className="btn btn-primary">Guardar cambios</button>
                  <button className="btn btn-ghost">Cancelar</button>
                </div>
              </div>
            </div>
          )}

          {tab === 'direcciones' && (
            <div className="card-lg card">
              <div className="between" style={{marginBottom: 16}}>
                <h2 style={{fontSize: 18}}>Mis direcciones de envío</h2>
                <button className="btn btn-secondary btn-sm"><Icon.Plus /> Agregar</button>
              </div>
              <div className="card" style={{marginBottom: 10, padding: 18}}>
                <div className="between">
                  <div>
                    <div style={{fontWeight: 600, marginBottom: 2}}>Consultorio principal <span className="pill" style={{marginLeft: 8, height: 22, fontSize: 11}}>Predeterminada</span></div>
                    <p className="muted" style={{fontSize: 13, margin: '4px 0 0', lineHeight: 1.5}}>Av. Lázaro Cárdenas 2400, Local 14<br/>Col. Valle Oriente · San Pedro Garza García, N.L. 66269</p>
                  </div>
                  <button className="btn btn-ghost btn-sm">Editar</button>
                </div>
              </div>
              <div className="card" style={{padding: 18}}>
                <div className="between">
                  <div>
                    <div style={{fontWeight: 600, marginBottom: 2}}>Sucursal Guadalupe</div>
                    <p className="muted" style={{fontSize: 13, margin: '4px 0 0', lineHeight: 1.5}}>Av. Pablo Livas 5800<br/>Col. Linda Vista · Guadalupe, N.L. 67130</p>
                  </div>
                  <button className="btn btn-ghost btn-sm">Editar</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

Object.assign(window, { LandingPage, LoginPage, CatalogPage, ProductPage, CartPage, AccountPage });
