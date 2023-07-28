import { useLang } from '../../hooks';

interface BiLangProps {
  parentData: Record<string, any>;
  arKey: string;
  enkey: string;
}

const BiLang = ({ arKey, enkey, parentData = {} }: BiLangProps) => {
  const currentLanguage = useLang();
  return (
    <>{currentLanguage === 'ar' ? parentData[arKey] : parentData[enkey]}</>
  );
};

export default BiLang;
