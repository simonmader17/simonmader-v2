import { useMemo } from "react";
import useNextTranslation from "next-translate/useTranslation";

const useTranslation = (namespace) => {
  const { t } = useNextTranslation(namespace);
  const T = useMemo(() => t, []);
  return { t: T };
};

export default useTranslation;