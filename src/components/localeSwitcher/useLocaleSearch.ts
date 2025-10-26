import Fuse, { type IFuseOptions } from "fuse.js";
import {
	getLocaleName,
	Locales,
	type LocalesValues,
} from "intlayer";
import { useState } from "react";

type MultilingualAvailableLocales = {
	locale: LocalesValues;
	englishName: string;
	currentLocaleName: string;
	ownLocaleName: string;
};

export const useLocaleSearch = (
  availableLocales: LocalesValues[],
  locale: LocalesValues = Locales.ENGLISH
) => {
  const multilingualAvailableLocales: MultilingualAvailableLocales[] =
    availableLocales.map((localeEl) => {
      const englishName = getLocaleName(localeEl, Locales.ENGLISH);
      const currentLocaleName = getLocaleName(localeEl, locale);
      const ownLocaleName = getLocaleName(localeEl);
      return {
        locale: localeEl,
        englishName,
        currentLocaleName,
        ownLocaleName,
      };
    });

  const [searchResults, setSearchResults] = useState<
    MultilingualAvailableLocales[]
  >(multilingualAvailableLocales);

  const fuseOptions: IFuseOptions<MultilingualAvailableLocales> = {
    keys: [
      { name: "ownLocaleName", weight: 0.4 },
      { name: "englishName", weight: 0.2 },
      { name: "currentLocaleName", weight: 0.2 },
      { name: "locale", weight: 0.2 },
    ],
    threshold: 0.02, // Defines how fuzzy the matching should be (lower is more strict)
  };
  // Create a new Fuse instance with the options and documentation data
  const fuse = new Fuse(multilingualAvailableLocales, fuseOptions);

  const handleSearch = (searchQuery: string) => {
    if (searchQuery) {
      // Perform search on every input change
      const searchResults = fuse
        .search(searchQuery)
        .map((result) => result.item);
      setSearchResults(searchResults);
    } else {
      setSearchResults(multilingualAvailableLocales);
    }
  };

  return { searchResults, handleSearch };
};
