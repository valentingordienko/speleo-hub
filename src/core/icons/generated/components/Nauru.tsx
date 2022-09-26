import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Nauru.svg';

export function Nauru(props: TProps) {
  return (
    <Icon {...props} name="Nauru">
      <SVG />
    </Icon>
  );
}
