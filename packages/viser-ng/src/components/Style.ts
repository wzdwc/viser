export interface ITextStyle {
  fontSize?: number | string;
  textAlign?: string;
  fill?: string;
  fontWeight?: string;
  textBaseline?: 'top' | 'middle' | 'bottom';
  rotate?: number;
  shadowBlur?: number;
  shadowColor?: string;
}

export interface ILineStyle {
  stroke?: string;
  strokeOpacity?: string;
  lineWidth?: number;
  lineHeight?: number;
  lineDash?: number[];
}
