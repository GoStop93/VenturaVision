import { useTranslation } from 'react-i18next';

import { pdf } from '@react-pdf/renderer';

import { IPDFDownloadButtonProps } from './types';

import * as S from './PDFDownloadButton.styles';

const PDFDownloadButton: React.FC<IPDFDownloadButtonProps> = (props) => {
  const { children, fileName } = props;

  const { t } = useTranslation('common');

  const translations = {
    text: t('common:PDF_button.text'),
  };

  const handleDownload = async () => {
    const doc = pdf(children);
    const blob = await doc.toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <S.PDFButton variant="outlined" onClick={handleDownload}>
      <S.Icon />
      {translations.text}
    </S.PDFButton>
  );
};

export default PDFDownloadButton;
