import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Malawi.svg';

export function Malawi(props: TBaseProps) {
  return (
    <Icon {...props} name="Malawi">
      <SVG />
    </Icon>
  );
}
