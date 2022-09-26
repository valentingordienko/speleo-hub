import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChartTrendingOutline.svg';

export function ChartTrendingOutline(props: TProps) {
  return (
    <Icon {...props} name="ChartTrendingOutline">
      <SVG />
    </Icon>
  );
}
