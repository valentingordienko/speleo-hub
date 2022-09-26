import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Malawi.svg';

export function Malawi(props: TProps) {
  return (
    <Icon {...props} name="Malawi">
      <SVG />
    </Icon>
  );
}
