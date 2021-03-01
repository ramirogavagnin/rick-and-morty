export const renderTranslations = (translations, section, keys) => {
  return Object.keys(keys).reduce((completedTranslations, key) => {
    completedTranslations[key] = translations.t(`${section}.${key}`);
    return completedTranslations;
  }, {});
};
