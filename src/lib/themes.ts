// Each situation is drawn as a kind of inner weather.
// The colour, icon, ambient sky and share image all come from this one list.

export const THEMES = [
  { name: 'After social moments', weather: 'Dusk', icon: 'dusk', light: { tint: '#F7E4D7', accent: '#974C33' } },
  { name: 'Everyday dips', weather: 'Overcast', icon: 'overcast', light: { tint: '#E6E4F0', accent: '#5F5B8C' } },
  { name: 'Comparison and scrolling', weather: 'Drizzle', icon: 'drizzle', light: { tint: '#DDE9F4', accent: '#36628C' } },
  { name: 'Relationships', weather: 'Rainbow', icon: 'rainbow', light: { tint: '#F7DFE4', accent: '#98445D' } },
  { name: 'Work and study', weather: 'Wind', icon: 'wind', light: { tint: '#F3EACB', accent: '#7A5F0E' } },
  { name: 'Change and in-between', weather: 'Mist', icon: 'mist', light: { tint: '#DCEDE4', accent: '#37704F' } },
] as const;

// 24×24 stroke icons
export const ICONS: Record<string, string> = {
  dusk: '<path d="M3 16.5h18M6.5 16.5a5.5 5.5 0 0 1 11 0"/><path d="M12 5.5v2M5.6 8.6 7 10M18.4 8.6 17 10"/><path d="M7 20h10"/>',
  overcast: '<path d="M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6 1.2A3.5 3.5 0 0 1 17 18z"/>',
  drizzle: '<path d="M7 14.5a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6 1.2A3.5 3.5 0 0 1 17 14.5z"/><path d="M8.5 17.5 7.5 20M12.5 17.5l-1 2.5M16.5 17.5l-1 2.5"/>',
  rainbow: '<path d="M3 18a9 9 0 0 1 18 0M6 18a6 6 0 0 1 12 0M9 18a3 3 0 0 1 6 0"/>',
  wind: '<path d="M3 9h10.5a2.5 2.5 0 1 0-2.5-2.5M3 13h14.5a2.5 2.5 0 1 1-2.5 2.5M3 17h7"/>',
  mist: '<path d="M4 8h12M7 12h13M3 16h11M8 20h9"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
  bookmark: '<path d="M6.5 4h11v16l-5.5-4-5.5 4z"/>',
  share: '<path d="M12 15V4M8 8l4-4 4 4"/><path d="M5 13v5.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V13"/>',
  image: '<rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9.5" cy="10" r="1.5"/><path d="m20 16-4.5-4.5L7 19"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  shuffle: '<path d="M4 7h3.5c4 0 5 10 9 10H20M4 17h3.5c1.7 0 2.8-1.8 3.8-3.8M14.7 10.8c1-2 2.1-3.8 3.8-3.8H20M17.5 4.5 20 7l-2.5 2.5M17.5 14.5 20 17l-2.5 2.5"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
  breath: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/>',
};

export const WHEN = [
  { id: 'people', label: 'Around people', hint: 'During or after time with others' },
  { id: 'quiet', label: 'In quiet moments', hint: 'Nights, Sundays, time alone' },
  { id: 'comparing', label: 'When I compare', hint: 'Scrolling, other people’s news' },
  { id: 'work', label: 'Work or study', hint: 'Tasks, deadlines, pressure' },
  { id: 'endings', label: 'When something ends or changes', hint: 'Finishing, moving, goodbyes' },
  { id: 'nowhere', label: 'Out of nowhere', hint: 'No clear reason at all' },
] as const;

export const FEEL = [
  { id: 'heavy', label: 'Heavy or low', hint: 'Like a weight sitting on you' },
  { id: 'restless', label: 'Restless or buzzy', hint: 'Can’t settle, mind racing' },
  { id: 'empty', label: 'Flat or empty', hint: 'Hollow, numb, a bit grey' },
  { id: 'stung', label: 'Stung or small', hint: 'Hurt, guilty, not enough' },
  { id: 'longing', label: 'Pulled backward', hint: 'Missing someone or something' },
  { id: 'tense', label: 'Tight or frozen', hint: 'Braced, stuck, blanking' },
] as const;

export const NOTE =
  'This site explains everyday feelings and isn’t medical advice. If a feeling is heavy, lasts for weeks, or gets in the way of daily life, talking to someone you trust or a professional can help.';

export const svg = (name: string, cls = 'ic') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;
