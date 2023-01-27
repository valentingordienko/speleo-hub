import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChartSolid.svg';

export function ChartSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ChartSolid">
      <SVG />
    </Icon>
  );
}
