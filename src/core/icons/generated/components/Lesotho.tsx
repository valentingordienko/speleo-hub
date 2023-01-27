import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Lesotho.svg';

export function Lesotho(props: TBaseProps) {
  return (
    <Icon {...props} name="Lesotho">
      <SVG />
    </Icon>
  );
}
