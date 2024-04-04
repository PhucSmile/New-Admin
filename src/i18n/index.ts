import enUS from 'antd/locale/en_US';
import viVN from 'antd/locale/vi_VN';
import { LOCALE } from 'constants/common';
import viVNTranslation from './vi/translation.json';
import enUSTranslation from './en/translation.json';

export const i18n = {
  [LOCALE.ENGLISH]: {
    translation: enUSTranslation,
    antd: enUS,
  },
  [LOCALE.VIETNAMESE]: {
    translation: viVNTranslation,
    antd: viVN,
  },
};
