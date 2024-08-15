import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import PDFTable from './PDFTable';

import { useTranslation } from 'react-i18next';

import { IVentilationResultsDocumentProps } from './types';

Font.register({
  family: 'Roboto',
  src: '/fonts/Roboto-Regular.ttf',
});

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
});

const VentilationResultsDocument: React.FC<IVentilationResultsDocumentProps> = (props) => {
  const { results } = props;

  const { t } = useTranslation('ventilationCalculator');

  const translations = {
    title_first: t('ventilationCalculator:online_calculator.results.title_first'),
    title_second: t('ventilationCalculator:online_calculator.results.title_second'),
  };

  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>
            {translations.title_first} {translations.title_second}
          </Text>
          <PDFTable data={results} />
        </View>
      </Page>
    </Document>
  );
};

export default VentilationResultsDocument;
