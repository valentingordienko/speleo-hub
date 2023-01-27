import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Italy.svg';

export function Italy(props: TBaseProps) {
  return (
    <Icon {...props} name="Italy">
      <SVG />
    </Icon>
  );
}
