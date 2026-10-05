import { PageShell } from '@/components/page-shell'

const services = ['Coffins & caskets', 'Décor', 'Tents', 'Chairs', 'Tombstones', 'Video', 'P.A. system', 'Transport services', 'Lowering device', 'Funeral programmes']

export default function ServicesPage() {
  return <PageShell eyebrow="Here when you need us" title="Funeral services with care"><p className="page-lead">Thoughtful essentials and practical support, handled with dignity from the first call.</p><div className="service-grid">{services.map((service, index) => <article className="service-card" key={service}><span className="service-number">0{index + 1}</span><h3>{service}</h3><p>Carefully prepared for your family.</p></article>)}</div></PageShell>
}
