import { PageShell } from '@/components/page-shell'
import { burialPlans } from '@/data/tombstones'

export default function SchemePage() {
  return <PageShell eyebrow="Plan with confidence" title="Burial scheme"><p className="page-lead">Affordable cover that helps your family honour a life well lived.</p><div className="plan-grid">{burialPlans.map((plan) => <article className="plan-card" key={plan.name}><p className="plan-label">{plan.name}</p><h3>{plan.age}</h3><div className="plan-price"><strong>R {plan.monthly[0].toLocaleString('en-ZA')}</strong><span>/ month</span></div><p>Joining fee: <b>R {plan.joining[0].toLocaleString('en-ZA')}</b></p><a className="button plan-button" href="https://wa.me/27739482146?text=Hello%20Luloyiso%2C%20I%20would%20like%20to%20join%20the%20burial%20scheme." target="_blank" rel="noreferrer">Join this scheme</a></article>)}</div></PageShell>
}
