import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EuropeanUnion.svg';

export function EuropeanUnion(props: TProps) {
  return (
    <Icon {...props} name="EuropeanUnion">
      <SVG />
    </Icon>
  );
}
