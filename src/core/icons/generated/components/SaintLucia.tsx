import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SaintLucia.svg';

export function SaintLucia(props: TBaseProps) {
  return (
    <Icon {...props} name="SaintLucia">
      <SVG />
    </Icon>
  );
}
