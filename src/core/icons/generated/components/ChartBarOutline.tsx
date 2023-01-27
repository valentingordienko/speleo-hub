import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChartBarOutline.svg';

export function ChartBarOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ChartBarOutline">
      <SVG />
    </Icon>
  );
}
