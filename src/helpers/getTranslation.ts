import es from '@Locales/es.json';
import en from '@Locales/en.json';

export default function getTranslation(
  pathName: string,
): typeof es | typeof en {
  return pathName.startsWith('/en') ? en : es;
}
