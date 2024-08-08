import { pdf } from '@react-pdf/renderer';

import { IPDFDownloadButtonProps } from './types';

import * as S from './PDFDownloadButton.styles';

const PDFDownloadButton: React.FC<IPDFDownloadButtonProps> = (props) => {
  const { children, fileName } = props;

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
      Скачать PDF
    </S.PDFButton>
  );
};

export default PDFDownloadButton;
