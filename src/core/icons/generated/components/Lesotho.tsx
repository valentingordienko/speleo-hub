import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Lesotho.svg';

export function Lesotho(props: TProps) {
  return (
    <Icon {...props} name="Lesotho">
      <SVG />
    </Icon>
  );
}
