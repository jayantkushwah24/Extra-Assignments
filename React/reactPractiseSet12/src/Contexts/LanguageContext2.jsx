import { Translation } from "../Components/Translation2";
import { translations } from "../Data/TranslationData2";

export function LanguageContext() {
  return (
    <>
      <Translation translations={translations} />
    </>
  );
}
