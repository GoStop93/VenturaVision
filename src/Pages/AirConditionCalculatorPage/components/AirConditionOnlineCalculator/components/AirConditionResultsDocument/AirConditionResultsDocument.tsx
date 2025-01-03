import { Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import PDFTable from './PDFTable';
import { IAirConditionResultsDocumentProps } from './types';

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

const AirConditionResultsDocument: React.FC<IAirConditionResultsDocumentProps> = (props) => {
  const { results } = props;

  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>
          Таблица расчета тепловых нагрузок:
          </Text>
          <PDFTable data={results} />
        </View>
      </Page>
    </Document>
  );
};

export default AirConditionResultsDocument;