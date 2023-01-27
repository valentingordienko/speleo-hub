import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EuropeanUnion.svg';

export function EuropeanUnion(props: TBaseProps) {
  return (
    <Icon {...props} name="EuropeanUnion">
      <SVG />
    </Icon>
  );
}
