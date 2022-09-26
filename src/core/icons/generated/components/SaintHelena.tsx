import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SaintHelena.svg';

export function SaintHelena(props: TProps) {
  return (
    <Icon {...props} name="SaintHelena">
      <SVG />
    </Icon>
  );
}
