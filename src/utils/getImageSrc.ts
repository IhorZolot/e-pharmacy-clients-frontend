

const FALLBACK = '/src/assets/images/ImgNotFound.png'; 
const BASE = import.meta.env.VITE_API_URL;

export function getImageSrc(photo?: string | null) {
  if (!photo) return FALLBACK;
  if (photo.startsWith('http')) return photo;
  return `${BASE}/uploads/${photo}`;
}