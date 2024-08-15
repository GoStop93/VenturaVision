import { View, Text, StyleSheet, Font } from '@react-pdf/renderer';

import { useTranslation } from 'react-i18next';

import { IPDFTableProps } from './types';

Font.register({
  family: 'Roboto',
  src: '/fonts/Roboto-Regular.ttf',
});

const styles = StyleSheet.create({
  table: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Roboto',
  },
  tableCell: {
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    padding: 5,
    fontSize: 10,
    fontFamily: 'Roboto',
  },
  header: {
    backgroundColor: '#FEE2E2',
    fontWeight: 'bold',
  },
  oddRow: {
    backgroundColor: '#FEE2E2',
  },
  evenRow: {
    backgroundColor: '#FFFFFF',
  },
});

const PDFTable: React.FC<IPDFTableProps> = (props) => {
  const { data } = props;

  const { t } = useTranslation('ventilationCalculator');

  const translations = {
    system_name: t('ventilationCalculator:online_calculator.results.columns.system_name'),
    room_name: t('ventilationCalculator:online_calculator.results.columns.room_name'),
    people: t('ventilationCalculator:online_calculator.results.columns.people'),
    height: t('ventilationCalculator:online_calculator.results.columns.height'),
    area: t('ventilationCalculator:online_calculator.results.columns.area'),
    airflowCapacity: t('ventilationCalculator:online_calculator.results.columns.airflowCapacity'),
  };

  return (
    <View style={styles.table}>
      <View style={[styles.tableRow, styles.header]}>
        <Text style={styles.tableCell}>{translations.system_name}</Text>
        <Text style={styles.tableCell}>{translations.room_name}</Text>
        <Text style={styles.tableCell}>{translations.people}</Text>
        <Text style={styles.tableCell}>{translations.height}</Text>
        <Text style={styles.tableCell}>{translations.area}</Text>
        <Text style={styles.tableCell}>{translations.airflowCapacity}</Text>
      </View>
      {data.map((item, index) => (
        <View style={[styles.tableRow, index % 2 === 0 ? styles.evenRow : styles.oddRow]} key={item.id || index}>
          <Text style={styles.tableCell}>{item.systemName}</Text>
          <Text style={styles.tableCell}>{item.name}</Text>
          <Text style={styles.tableCell}>{item.people}</Text>
          <Text style={styles.tableCell}>{item.ceilingHeight}</Text>
          <Text style={styles.tableCell}>{item.area}</Text>
          <Text style={styles.tableCell}>{item.ventilation}</Text>
        </View>
      ))}
    </View>
  );
};

export default PDFTable;
