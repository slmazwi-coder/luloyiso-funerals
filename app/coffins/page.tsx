'use client'

import Image from 'next/image'
import { PageShell } from '@/components/page-shell'

const coffinModels = [
  { name: 'Royal Manhattan', page: '4' },
  { name: 'Belmont', page: '5' },
  { name: 'Nguni Dome', page: '6' },
  { name: 'Winchester', page: '7' },
  { name: 'Mini Dome', page: '10' },
  { name: 'Standard Dome', page: '11' },
  { name: 'Okavango', page: '12' },
  { name: 'Leather Dome', page: '13' },
  { name: 'Chief Dome', page: '14' },
]

const catalogueImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1791276496196-Mwr9trb4A0v0SIA0ts9NikCsXJB6Cx.jpg'

export default function CoffinsPage() {
  return <PageShell title="Coffin catalogue" eyebrow="Choose with care">
    <p className="page-lead">Browse our available coffin styles and finishes. Tell us the model name or catalogue page when you enquire and we will confirm availability, finish options and pricing.</p>
    <article className="coffin-collage-card">
      <div className="coffin-collage-frame"><Image src={catalogueImage} alt="Coffin catalogue collage showing nine coffin models" fill sizes="(max-width: 900px) 100vw, 900px" /></div>
      <div className="coffin-model-row">
        {coffinModels.map((model) => <div className="coffin-model" key={model.name}><p className="eyebrow">Page {model.page}</p><h2>{model.name}</h2><a href={`https://wa.me/27739482146?text=${encodeURIComponent(`Hello Luloyiso, I am enquiring about the ${model.name} coffin on catalogue page ${model.page}.`)}`} target="_blank" rel="noreferrer">WhatsApp enquiry</a></div>)}
      </div>
    </article>
  </PageShell>
}
