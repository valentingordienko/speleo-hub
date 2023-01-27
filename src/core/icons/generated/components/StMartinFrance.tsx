import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StMartinFrance.svg';

export function StMartinFrance(props: TBaseProps) {
  return (
    <Icon {...props} name="StMartinFrance">
      <SVG />
    </Icon>
  );
}
