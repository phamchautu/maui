import { FlexStyle } from "react-native";
import { AlignItems, Direction, JustifyContent } from "./type";

export const JUSTIFY: Record<JustifyContent, FlexStyle['justifyContent']> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly'
}

export const ALIGNS: Record<AlignItems, FlexStyle['alignItems']> = {
  start: 'flex-start',
  end: 'flex-end',
  base: 'baseline',
  center: 'center',
  stretch: 'stretch'
}

export const DIRECTIONS: Record<Direction, FlexStyle['flexDirection']> = {
  row: 'row',
  col: 'column',
  "re-row": 'row-reverse',
  "re-col": 'column-reverse'
}
