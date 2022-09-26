import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Italy.svg';

export function Italy(props: TProps) {
  return (
    <Icon {...props} name="Italy">
      <SVG />
    </Icon>
  );
}
