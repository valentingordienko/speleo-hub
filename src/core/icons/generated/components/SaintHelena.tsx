import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SaintHelena.svg';

export function SaintHelena(props: TBaseProps) {
  return (
    <Icon {...props} name="SaintHelena">
      <SVG />
    </Icon>
  );
}
