'use client'

import Link from 'next/link'
import Image from 'next/image'
import { logoUrl, whatsappNumbers } from '@/data/tombstones'

export function PageShell({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) {
  return <div className="site-shell"><header className="site-header"><Link href="/" className="brand"><Image className="brand-logo" src={logoUrl} alt="Luloyiso Funeral Services logo" width={150} height={72} priority /></Link><nav className="nav-links page-nav"><Link href="/services">Our services</Link><Link href="/scheme">Burial scheme</Link><Link href="/tombstones">Tombstone catalogue</Link><Link href="/coffins">Coffin catalogue</Link><Link href="/contact">Contact us</Link></nav><a className="header-call" href="tel:+27739482146">Call now</a></header><main><section className="section page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{children}</section></main><a className="whatsapp-bubble" href={`https://wa.me/${whatsappNumbers[0]}?text=${encodeURIComponent('Hello Luloyiso, I would like to enquire about your services.')}`} target="_blank" rel="noreferrer" aria-label="Chat with Luloyiso on WhatsApp"><span>WhatsApp</span><b>↗</b></a><footer><div className="brand"><Image className="brand-logo footer-logo" src={logoUrl} alt="Luloyiso Funeral Services logo" width={150} height={72} /></div><p>“The Lord is close to the brokenhearted.”<br />Psalm 34:18</p><div className="footer-locations"><strong>Locations</strong><span>8 North Street, Matatiele, 4730</span><span>Westgate 5C, Matatiele, 4730</span></div></footer></div>
}
