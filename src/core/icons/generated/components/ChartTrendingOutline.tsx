import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChartTrendingOutline.svg';

export function ChartTrendingOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ChartTrendingOutline">
      <SVG />
    </Icon>
  );
}
