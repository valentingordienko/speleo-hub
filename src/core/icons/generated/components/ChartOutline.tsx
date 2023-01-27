import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChartOutline.svg';

export function ChartOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ChartOutline">
      <SVG />
    </Icon>
  );
}
