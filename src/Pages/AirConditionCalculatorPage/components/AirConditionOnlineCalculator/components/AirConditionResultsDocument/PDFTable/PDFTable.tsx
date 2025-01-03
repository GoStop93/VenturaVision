import { useTranslation } from 'react-i18next';

import { Font, StyleSheet, Text, View } from '@react-pdf/renderer';

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

  const { t } = useTranslation('airConditionCalculator');

  const translations = {
    system_name: t('airConditionCalculator:online_calculator.results.columns.system_name'),
    height: t('airConditionCalculator:online_calculator.results.columns.height'),
    room_name: t('airConditionCalculator:online_calculator.results.columns.room_name'),
    area: t('airConditionCalculator:online_calculator.results.columns.area'),
    cooling_capacity: t('airConditionCalculator:online_calculator.results.columns.cooling_capacity'),
    power_range: t('airConditionCalculator:online_calculator.results.columns.power_range'),
  };

  return (
    <View style={styles.table}>
      <View style={[styles.tableRow, styles.header]}>
        <Text style={styles.tableCell}>{translations.system_name}</Text>
        <Text style={styles.tableCell}>{translations.room_name}</Text>
        <Text style={styles.tableCell}>{translations.height}</Text>
        <Text style={styles.tableCell}>{translations.area}</Text>
        <Text style={styles.tableCell}>{translations.cooling_capacity}</Text>
        <Text style={styles.tableCell}>{translations.power_range}</Text>
      </View>
      {data.map((item, index) => {
        const minQ = (item.Q * 0.95).toFixed(2);
        const maxQ = (item.Q * 1.2).toFixed(2);
        return (
          <View
            style={[styles.tableRow, index % 2 === 0 ? styles.evenRow : styles.oddRow]}
            key={item.id || index}
          >
            <Text style={styles.tableCell}>{item.systemName}</Text>
            <Text style={styles.tableCell}>{item.name}</Text>
            <Text style={styles.tableCell}>{item.ceilingHeight}</Text>
            <Text style={styles.tableCell}>{item.area}</Text>
            <Text style={styles.tableCell}>{item.Q}</Text>
            <Text style={styles.tableCell}>
              {minQ} - {maxQ}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default PDFTable;