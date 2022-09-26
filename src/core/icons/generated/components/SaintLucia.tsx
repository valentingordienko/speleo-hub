import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SaintLucia.svg';

export function SaintLucia(props: TProps) {
  return (
    <Icon {...props} name="SaintLucia">
      <SVG />
    </Icon>
  );
}
