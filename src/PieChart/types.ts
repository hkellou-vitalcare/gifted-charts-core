import {ColorValue} from 'react-native';
import {FontStyle} from 'react-native-svg';

export type PieChartPropsType = {
  radius?: number;
  isThreeD?: boolean;
  donut?: boolean;
  innerRadius?: number;
  shadow?: boolean;
  innerCircleColor?: ColorValue;
  innerCircleBorderWidth?: number;
  innerCircleBorderColor?: ColorValue;
  shiftInnerCenterX?: number;
  shiftInnerCenterY?: number;
  shadowColor?: string;
  shadowWidth?: number;
  strokeWidth?: number;
  strokeColor?: string;
  backgroundColor?: string;
  data: Array<pieDataItem>;
  semiCircle?: boolean;

  showText?: boolean;
  textColor?: string;
  textSize?: number;
  fontStyle?: FontStyle;
  fontWeight?: string;
  font?: string;
  showTextBackground?: boolean;
  textBackgroundColor?: string;
  textBackgroundRadius?: number;
  showValuesAsLabels?: boolean;

  centerLabelComponent?: Function;
  tiltAngle?: string;
  initialAngle?: number;
  labelsPosition?: 'onBorder' | 'outward' | 'inward' | 'mid';
  showGradient?: boolean;
  gradientCenterColor?: string;
  onPress?: Function;
  focusOnPress?: boolean;
  toggleFocusOnPress?: boolean;
  selectedIndex?: number;
  setSelectedIndex?: Function;
  sectionAutoFocus?: boolean;
  onLabelPress?: Function;
  extraRadiusForFocused?: number;
  inwardExtraLengthForFocused?: number;
  pieInnerComponent?: (item?: pieDataItem, index?: number) => any;
  pieInnerComponentHeight?: number;
  pieInnerComponentWidth?: number;
};
export type pieDataItem = {
  value: number;
  shiftX?: number;
  shiftY?: number;
  color?: string;
  gradientCenterColor?: string;
  text?: string;
  textColor?: string;
  textSize?: number;
  fontStyle?: FontStyle;
  fontWeight?: string;
  font?: string;
  textBackgroundColor?: string;
  textBackgroundRadius?: number;
  shiftTextX?: number;
  shiftTextY?: number;
  labelPosition?: 'onBorder' | 'outward' | 'inward' | 'mid';
  onPress?: Function;
  onLabelPress?: Function;
  strokeWidth?: number;
  strokeColor?: string;
  focused?: boolean;
  peripheral?: boolean;
  pieInnerComponent?: (item?: pieDataItem, index?: number) => any;
};

export interface PieChartMainProps extends PieChartPropsType {
  setSelectedIndex: Function;
  isBiggerPie?: boolean;
}
