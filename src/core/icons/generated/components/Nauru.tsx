import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Nauru.svg';

export function Nauru(props: TBaseProps) {
  return (
    <Icon {...props} name="Nauru">
      <SVG />
    </Icon>
  );
}
