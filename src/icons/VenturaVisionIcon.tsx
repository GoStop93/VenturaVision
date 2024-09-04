import { createSvgIcon } from '@mui/material';

import { colors } from '@/styles/colors';

const VenturaVisionIcon = createSvgIcon(
  <>
    <svg
      viewBox="517.851 517.85 964.299 964.3"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 2,
      }}
    >
      <path
        transform="matrix(1, 0, 0, -1, 0, 2000)"
        d="M1179.9,877.645L1314.43,1146.72L1314.39,1146.81L1314.48,1146.81L1482.15,1482.15L1053.55,1482.15L1221.22,1146.81L1221.31,1146.81L1133.31,970.814L1179.9,877.645ZM1188.39,1398.82L1347.31,1398.82L1267.85,1239.89L1188.39,1398.82Z"
        style={{ fill: `${colors.orange}`, fillOpacity: 1 }}
      />
      <path
        d="M1060.06,1028.99L1143.32,1195.51L1000,1482.15L517.851,517.851L804.489,517.851L1013.52,935.913L1101.51,760.004L1148.12,853.218L1060.06,1028.99ZM960.38,1015.97L752.986,601.184L652.687,601.184L1000,1295.81L1050.15,1195.51L960.38,1015.97Z"
        style={{ fill: `${colors.white}`, fillOpacity: 1 }}
      />
    </svg>
  </>,
  'VenturaVisionIcon',
);

export default VenturaVisionIcon;
