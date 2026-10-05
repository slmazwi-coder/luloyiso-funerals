export type Tombstone = {
  code: string
  size: string | null
  headBase: number | null
  fullSet: number | null
  note?: string
  imageUrl?: string
}

export const SLAB_PRICE = 6500

export const tombstones: Tombstone[] = [
  { code: 'P1', size: '50x40', headBase: 2950, fullSet: 4950 }, { code: 'P2', size: '50x40', headBase: 2970, fullSet: 5060 }, { code: 'P3', size: '60x40', headBase: 3300, fullSet: 5500 }, { code: 'P4', size: '60x50', headBase: 3850, fullSet: 5500 }, { code: 'P5', size: '60x50', headBase: 5450, fullSet: 8050 }, { code: 'P6', size: '50x50', headBase: 4240, fullSet: 6840 }, { code: 'P7', size: '50x50', headBase: 4240, fullSet: 6840 }, { code: 'P8', size: '60x50', headBase: 4300, fullSet: 6900 }, { code: 'P9', size: '60x50', headBase: 4840, fullSet: 7440 }, { code: 'P10', size: '60x50', headBase: 5450, fullSet: 8050 }, { code: 'P11', size: '70x60', headBase: 5900, fullSet: 8500 }, { code: 'P12', size: '50x50', headBase: 5450, fullSet: 8050 }, { code: 'P13', size: '50x50', headBase: 5690, fullSet: 8290 }, { code: 'P14', size: '60x50', headBase: 5690, fullSet: 8290 }, { code: 'P15', size: '70x50', headBase: 6050, fullSet: 8650 }, { code: 'P16', size: '80x40', headBase: 7870, fullSet: 10470 }, { code: 'P17', size: '70x50', headBase: 7870, fullSet: 10470 }, { code: 'P18', size: '80x60', headBase: 8070, fullSet: 10670 }, { code: 'P19', size: '80x60', headBase: 8070, fullSet: 10670 }, { code: 'P20', size: '70x50', headBase: 6660, fullSet: 9200 }, { code: 'P21', size: '60x40', headBase: 6700, fullSet: 9300 }, { code: 'P22', size: '70x50', headBase: 6700, fullSet: 9300 }, { code: 'P23', size: '70x50', headBase: 6000, fullSet: 8600 }, { code: 'P24', size: '70x50', headBase: 6250, fullSet: 8850, note: 'Sheet lists two P24 rows' }, { code: 'P24B', size: '70x50', headBase: 6300, fullSet: 9440, note: 'Second row labelled P24 on the sheet' }, { code: 'P25', size: '70x50', headBase: 6840, fullSet: 9440 }, { code: 'P26', size: '50x50', headBase: 6840, fullSet: 9440 }, { code: 'P27', size: '50x50', headBase: 6300, fullSet: 8900 }, { code: 'P28', size: '70x50', headBase: 5650, fullSet: 8250 }, { code: 'P29', size: '80x60 (pillar)', headBase: 7960, fullSet: 10560 }, { code: 'P30', size: '60x40', headBase: 9140, fullSet: 11740 }, { code: 'P31', size: '50x40', headBase: 6700, fullSet: 9300 }, { code: 'P32', size: '70x60', headBase: 6850, fullSet: 9450 }, { code: 'P33', size: '70x60', headBase: 6950, fullSet: 9550 }, { code: 'P34', size: '70x60', headBase: 6250, fullSet: 8850 }, { code: 'P35', size: '70x50', headBase: 6580, fullSet: 9180 }, { code: 'P36', size: '70x60', headBase: 5450, fullSet: 8050 }, { code: 'P37', size: '80x60', headBase: 4840, fullSet: 7440 }, { code: 'P38', size: '80x60', headBase: 6900, fullSet: 9500 }, { code: 'P39', size: '80x60', headBase: 8020, fullSet: 10620 }, { code: 'P40', size: '70x60', headBase: 5880, fullSet: 8480 }, { code: 'P41', size: '70x60', headBase: 5810, fullSet: 8410 }, { code: 'P42', size: 'Double base', headBase: 4800, fullSet: 7500 }, { code: 'P43', size: '70x40x2', headBase: 7150, fullSet: 9750 }, { code: 'P44', size: '105x30', headBase: 10040, fullSet: 12640 }, { code: 'P45', size: '90x60', headBase: 9340, fullSet: 11940 }, { code: 'P46', size: '80x60', headBase: 9340, fullSet: 16370 }, { code: 'P47', size: '80x60', headBase: 11370, fullSet: 14980 }, { code: 'P48', size: '100x60', headBase: 12380, fullSet: 18600 }, { code: 'P49', size: '80x60', headBase: 14440, fullSet: 17040 }, { code: 'P50', size: null, headBase: 13090, fullSet: 15690 }, { code: 'P51', size: null, headBase: 9350, fullSet: 11950 }, { code: 'P52', size: null, headBase: 27500, fullSet: 35200 }, { code: 'P53', size: null, headBase: 24150, fullSet: 33000 }, { code: 'P54', size: null, headBase: null, fullSet: null }, { code: 'P55', size: null, headBase: 47000, fullSet: 50000 }, { code: 'P56', size: null, headBase: 40000, fullSet: 44000 }, { code: 'P57', size: null, headBase: 44000, fullSet: 47500 }, { code: 'P58', size: null, headBase: null, fullSet: null }, { code: 'P59', size: null, headBase: null, fullSet: null }, { code: 'P60', size: null, headBase: 13000, fullSet: 16500 }, { code: 'P61', size: 'Complete', headBase: null, fullSet: 48000 },
]

export const catalogueImages: Record<string, string> = {
  P49: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790924789821-gU0pq0MroA6P6DzlWGbRZmKKj4U4TH.jpg',
  P50: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790924789821-gU0pq0MroA6P6DzlWGbRZmKKj4U4TH.jpg',
  P51: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790924789821-gU0pq0MroA6P6DzlWGbRZmKKj4U4TH.jpg',
  P52: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790924789821-gU0pq0MroA6P6DzlWGbRZmKKj4U4TH.jpg',
  '13C': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790919922843-wSBj89USXjGydVVg2GuURjnYQF8BQR.jpg',
  '14D': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790919922843-wSBj89USXjGydVVg2GuURjnYQF8BQR.jpg',
  '17B': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790919922843-wSBj89USXjGydVVg2GuURjnYQF8BQR.jpg',
  W18: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790919922843-wSBj89USXjGydVVg2GuURjnYQF8BQR.jpg',
  P53: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790924625097-qj5pYxkVk0oBig6VLRfCUVnpdXjAgv.jpg',
  P55: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790924625097-qj5pYxkVk0oBig6VLRfCUVnpdXjAgv.jpg',
  P56: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790924625097-qj5pYxkVk0oBig6VLRfCUVnpdXjAgv.jpg',
  '6B': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790925036823-NyODCiz2kujFu4YGlhIhYKq3zBcltR.jpg',
  '6C': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790925036823-NyODCiz2kujFu4YGlhIhYKq3zBcltR.jpg',
  '13A': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790925036823-NyODCiz2kujFu4YGlhIhYKq3zBcltR.jpg',
  '13B': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790925036823-NyODCiz2kujFu4YGlhIhYKq3zBcltR.jpg',
  P57: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790925236209-YbHp6CScZe42o77mjlcgsM067uIH9Y.jpg',
  P60: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790925236209-YbHp6CScZe42o77mjlcgsM067uIH9Y.jpg',
  P61: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790925236209-YbHp6CScZe42o77mjlcgsM067uIH9Y.jpg',
  P29: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790928375653-757NjZ2QSkdTD46CT5tcNNOOJm3myH.jpg',
  P30: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790928375653-757NjZ2QSkdTD46CT5tcNNOOJm3myH.jpg',
  P31: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790928375653-757NjZ2QSkdTD46CT5tcNNOOJm3myH.jpg',
  P32: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790928375653-757NjZ2QSkdTD46CT5tcNNOOJm3myH.jpg',
  P33: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790926483755-AyUeGJ4pp5onLbYyy9NBh0stTLGmCx.jpg',
  P34: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790926483755-AyUeGJ4pp5onLbYyy9NBh0stTLGmCx.jpg',
  P35: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790926483755-AyUeGJ4pp5onLbYyy9NBh0stTLGmCx.jpg',
  P36: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790926483755-AyUeGJ4pp5onLbYyy9NBh0stTLGmCx.jpg',
  P37: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790926124633-uaxQLlCBKxkzKDm1oE652onyQCHeS1.jpg',
  P38: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790926124633-uaxQLlCBKxkzKDm1oE652onyQCHeS1.jpg',
  P39: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790926124633-uaxQLlCBKxkzKDm1oE652onyQCHeS1.jpg',
  P40: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790926124633-uaxQLlCBKxkzKDm1oE652onyQCHeS1.jpg',
  P41: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790925415039-BygAtYLx3RD1LDUAXCGvfidhpKeEOf.jpg',
  P42: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790925415039-BygAtYLx3RD1LDUAXCGvfidhpKeEOf.jpg',
  P43: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790925415039-BygAtYLx3RD1LDUAXCGvfidhpKeEOf.jpg',
  P44: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790925415039-BygAtYLx3RD1LDUAXCGvfidhpKeEOf.jpg',
  P45: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790925313018-DywoRMM8apM9PWp6TXP12Gk5Mb0ZHl.jpg',
  P46: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790925313018-DywoRMM8apM9PWp6TXP12Gk5Mb0ZHl.jpg',
  P47: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790925313018-DywoRMM8apM9PWp6TXP12Gk5Mb0ZHl.jpg',
  P48: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1790925313018-DywoRMM8apM9PWp6TXP12Gk5Mb0ZHl.jpg',
}

export const primaryEmail = 'sibongilemginqi@gmail.com'
export const secondaryEmail = 'luloyiso76@gmail.com'
export const phoneNumbers = ['073 948 2146', '079 348 3076']
export const whatsappNumbers = ['27739482146', '27793483076']
export const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1-z99cr5wwhbiuJO6XWcv5NVSX4aMSY9.jpg'
export const buildingPhotoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260926_104307-7cYYOzQqbsEQoch3sE9MhqDWR5XHbQ.jpg'
export const certificatePhotoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260926_104150-zkwpnRBsP3s4WOV5XlJZNutdlLGN4b.jpg'
export const memorialPhotoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260926_104232-tHValnwu7raNyrpa013QLOpP96YeVp.jpg'

export const burialPlans = [
  { name: 'Scheme A', age: '22–59 years', monthly: [100, 130], joining: [180, 180] },
  { name: 'Scheme B', age: '60–79 years', monthly: [110, 150], joining: [180, 180] },
  { name: 'Scheme C', age: '80 years & above', monthly: [150, 200], joining: [150, 200] },
]
