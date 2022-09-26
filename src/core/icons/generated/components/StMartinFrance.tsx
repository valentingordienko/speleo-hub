import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StMartinFrance.svg';

export function StMartinFrance(props: TProps) {
  return (
    <Icon {...props} name="StMartinFrance">
      <SVG />
    </Icon>
  );
}
