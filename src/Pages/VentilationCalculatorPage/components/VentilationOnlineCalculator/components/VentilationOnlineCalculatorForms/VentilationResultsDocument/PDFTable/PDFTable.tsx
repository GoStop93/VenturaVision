import { View, Text, StyleSheet, Font } from '@react-pdf/renderer';

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
  return (
    <View style={styles.table}>
      <View style={[styles.tableRow, styles.header]}>
        <Text style={styles.tableCell}>№ Системы</Text>
        <Text style={styles.tableCell}>Наименование помещения</Text>
        <Text style={styles.tableCell}>Количество людей</Text>
        <Text style={styles.tableCell}>Высота помещения, м</Text>
        <Text style={styles.tableCell}>Площадь помещения, м²</Text>
        <Text style={styles.tableCell}>Расход воздуха, м³/ч</Text>
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
