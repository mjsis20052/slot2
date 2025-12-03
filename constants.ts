import { SlotGame } from './types';

// Updated WhatsApp link for recharges
export const WHATSAPP_LINK = "https://wa.me/5491162018526?text=Hola,%20quiero%20hacer%20una%20recarga";

export const FEATURED_GAMES: SlotGame[] = [
  { id: '1', title: 'Volcano Rising', imageUrl: 'https://picsum.photos/seed/volcano/300/200', isHot: true },
  { id: '2', title: 'Voltage Blitz', imageUrl: 'https://picsum.photos/seed/blitz/300/200' },
  { id: '3', title: 'Joker\'s Jewels', imageUrl: 'https://picsum.photos/seed/jewels/300/200', isHot: true },
  { id: '4', title: 'Aztec Magic', imageUrl: 'https://picsum.photos/seed/aztec/300/200' },
  { id: '5', title: 'Big Wild Buffalo', imageUrl: 'https://picsum.photos/seed/buffalo/300/200' },
  { id: '6', title: 'Fruity Time', imageUrl: 'https://picsum.photos/seed/fruity/300/200' },
];

export const JOKER_GAMES: SlotGame[] = [
  { id: '7', title: 'Joker\'s Jewels Cash', imageUrl: 'https://picsum.photos/seed/cash/300/200' },
  { id: '8', title: 'Lavish Joker', imageUrl: 'https://picsum.photos/seed/lavish/300/200' },
  { id: '9', title: 'Go High Joker', imageUrl: 'https://picsum.photos/seed/go/300/200' },
  { id: '10', title: '20 Joker Reels', imageUrl: 'https://picsum.photos/seed/reels/300/200' },
  { id: '11', title: 'Fire Joker', imageUrl: 'https://picsum.photos/seed/fire/300/200' },
  { id: '12', title: 'Ice Joker', imageUrl: 'https://picsum.photos/seed/ice/300/200' },
];

export const NOTIFICATIONS = [
  { name: "Martín G.", amount: "$100.000", game: "Volcano Rising" },
  { name: "Sofía L.", amount: "$50.000", game: "Joker's Jewels" },
  { name: "Lucas P.", amount: "$25.000", game: "Aztec Magic" },
  { name: "Valentina R.", amount: "$200.000", game: "Big Wild Buffalo" },
  { name: "Diego M.", amount: "$75.000", game: "Fruity Time" },
  { name: "Camila S.", amount: "$30.000", game: "Fire Joker" }
];

export const RECENT_WINNERS = [
  { id: '101', name: 'Carlos M.', location: 'Buenos Aires', prize: '$500.000' },
  { id: '102', name: 'Ana R.', location: 'Córdoba', prize: '$250.000' },
  { id: '103', name: 'Pedro S.', location: 'Rosario', prize: '$100.000' },
  { id: '104', name: 'Lucía F.', location: 'Mendoza', prize: '$750.000' },
  { id: '105', name: 'Miguel A.', location: 'Salta', prize: '$150.000' },
];