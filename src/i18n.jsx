import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Hokejové mistrovství světa 2024": "Ice Hockey World Championship 2024",
      "Zápasy": "Matches",
      "Týmy": "Teams",
      "Přepnout na tmavý režim": "Switch to dark mode",
      "Přepnout na světlý režim": "Switch to light mode",
      "Statistiky týmů": "Team Statistics",
      "Přidat do oblíbených": "Add to favorites",
      "Odebrat z oblíbených": "Remove from favorites",
    }
  },
  cs: {
    translation: {
      "Hokejové mistrovství světa 2024": "Hokejové mistrovství světa 2024",
      "Zápasy": "Zápasy",
      "Týmy": "Týmy",
      "Přepnout na tmavý režim": "Přepnout na tmavý režim",
      "Přepnout na světlý režim": "Přepnout na světlý režim",
      "Statistiky týmů": "Statistiky týmů",
      "Přidat do oblíbených": "Přidat do oblíbených",
      "Odebrat z oblíbených": "Odebrat z oblíbených",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'cs',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
