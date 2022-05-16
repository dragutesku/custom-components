import {
  dictionary,
  locale,
  _
} from 'svelte-i18n';

import { en } from './lang/en.js';
import { fr } from './lang/fr.js';

function setupI18n({ withLocale: _locale}) {
  dictionary.set(en, fr);
  locale.set(_locale);
}

export { _, setupI18n };
