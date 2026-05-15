// Dental Supply c&m — Supabase-backed catalog data

window.DS_SUPABASE_URL = 'https://uqsvhktczdpyssqblyze.supabase.co';
window.DS_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxc3Zoa3RjemRweXNzcWJseXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNzk0NDAsImV4cCI6MjA5Mzc1NTQ0MH0.wudQwI6z4cEfk2_i-NgVWoHsKjj1-qcU8tfsPRFEoeI';

window.DS_CONTACT = {
  phone: '+52 81 8365 4986',
  phoneRaw: '528183654986',
  whatsapp: '+52 81 3260 2012',
  whatsappRaw: '528132602012',
  email: 'contacto@dentalsupplycm.com',
  address: 'Av. Eugenio Garza Sada #4901',
  colony: 'Col. La Condesa',
  city: 'Monterrey, N.L. 64880',
  hoursWeek: 'Lun – Vie · 8:00 am – 7:00 pm',
  hoursSat: 'Sáb · 8:00 am – 2:00 pm',
};

// Supabase REST helper (no SDK needed — plain fetch)
window.supabase = {
  from: (table) => ({
    _table: table,
    _params: new URLSearchParams(),
    _headers: {
      'apikey': window.DS_SUPABASE_KEY,
      'Authorization': 'Bearer ' + window.DS_SUPABASE_KEY,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
    },
    select(cols) {
      if (cols) this._params.set('select', cols);
      return this;
    },
    eq(col, val) {
      this._params.set(col, 'eq.' + val);
      return this;
    },
    ilike(col, val) {
      this._params.set(col, 'ilike.' + val);
      return this;
    },
    or(expr) {
      this._params.set('or', '(' + expr + ')');
      return this;
    },
    order(col, opts) {
      this._params.set('order', col + (opts && opts.ascending === false ? '.desc' : '.asc'));
      return this;
    },
    range(from, to) {
      this._headers['Range'] = from + '-' + to;
      this._headers['Prefer'] = 'count=exact';
      return this;
    },
    limit(n) {
      this._params.set('limit', n);
      return this;
    },
    async execute() {
      const url = window.DS_SUPABASE_URL + '/rest/v1/' + this._table + '?' + this._params.toString();
      const res = await fetch(url, { headers: this._headers });
      const data = await res.json();
      const range = res.headers.get('content-range');
      const total = range ? parseInt(range.split('/')[1]) : null;
      return { data, total, error: res.ok ? null : data };
    },
    async insert(rows) {
      const url = window.DS_SUPABASE_URL + '/rest/v1/' + this._table;
      const res = await fetch(url, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(rows),
      });
      const data = await res.json();
      return { data, error: res.ok ? null : data };
    },
  }),
};

// Static category definitions (matches Supabase categories table)
window.DS_CATEGORIES = [
  { id: 'instrumental', name: 'Instrumental', short: 'Instrumental', icon: 'tool', desc: 'Fresas, fórceps, elevadores, pinzas, cassettes' },
  { id: 'desechables', name: 'Desechables y Consumibles', short: 'Desechables', icon: 'glove', desc: 'Guantes, mascarillas, baberos, uniformes' },
  { id: 'laboratorio', name: 'Laboratorio Dental', short: 'Laboratorio', icon: 'lab', desc: 'Alginatos, acrílicos, articuladores, dientes' },
  { id: 'restauracion', name: 'Materiales de Restauración', short: 'Restauración', icon: 'restoration', desc: 'Composites, cementos, adhesivos, ionómeros' },
  { id: 'ortodoncia', name: 'Ortodoncia', short: 'Ortodoncia', icon: 'ortho', desc: 'Brackets, arcos, bandas, accesorios' },
  { id: 'endodoncia', name: 'Endodoncia', short: 'Endodoncia', icon: 'endo', desc: 'Limas, gutapercha, irrigantes' },
  { id: 'higiene', name: 'Higiene y Profilaxis', short: 'Higiene', icon: 'brush', desc: 'Pastas, copas, fluoruros, cepillos' },
  { id: 'equipos', name: 'Equipos y Tecnología', short: 'Equipos', icon: 'chair', desc: 'Unidades dentales, fotocurado, autoclaves' },
  { id: 'esterilizacion', name: 'Esterilización e Higiene', short: 'Esterilización', icon: 'steril', desc: 'Bolsas, desinfectantes, indicadores' },
  { id: 'radiologia', name: 'Radiología', short: 'Radiología', icon: 'xray', desc: 'Películas, sensores, posicionadores' },
  { id: 'anestesia', name: 'Anestesia', short: 'Anestesia', icon: 'syringe', desc: 'Cartuchos, agujas, jeringas carpule' },
  { id: 'implantologia', name: 'Implantología', short: 'Implantología', icon: 'implant', desc: 'Implantes, pilares, instrumental' },
  { id: 'general', name: 'Otros Productos', short: 'General', icon: 'tool', desc: 'Productos diversos y accesorios' },
];

// Cache for category counts (fetched once from Supabase)
window.DS_CATEGORY_COUNTS = {};
window.DS_TOTAL_PRODUCTS = 0;
window.DS_PRODUCTS_LOADED = false;

// Fetch category counts on load
(async function loadCategoryCounts() {
  try {
    const promises = window.DS_CATEGORIES.map(async (cat) => {
      const { total } = await window.supabase.from('products')
        .select('id')
        .eq('category', cat.id)
        .range(0, 0)
        .execute();
      return { id: cat.id, count: total || 0 };
    });
    const results = await Promise.all(promises);
    let grandTotal = 0;
    results.forEach(r => {
      window.DS_CATEGORY_COUNTS[r.id] = r.count;
      grandTotal += r.count;
    });
    window.DS_TOTAL_PRODUCTS = grandTotal;
    window.DS_PRODUCTS_LOADED = true;
    if (window._onProductCountsLoaded) window._onProductCountsLoaded();
  } catch (e) {
    console.error('Failed to load category counts:', e);
  }
})();
