import { PageShell } from '@/components/page-shell'
import { primaryEmail } from '@/data/tombstones'

export default function ContactPage() {
  return <PageShell eyebrow="We are here to help" title="Contact us"><p className="page-lead">Tell us what you need and we will respond with care.</p><div className="contact-grid"><div className="contact-details"><a href="tel:+27739482146"><span>Call us</span>073 948 2146</a><a href="tel:+27793483076"><span>Call us</span>079 348 3076</a><a href={`mailto:${primaryEmail}`}><span>Email</span>{primaryEmail}</a><p><span>Visit</span>Westgate 5C, Matatiele, 4730</p></div><div className="map-placeholder">Westgate 5C<br /><small>Matatiele, Eastern Cape</small></div></div></PageShell>
}
