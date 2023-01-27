import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SaoTomeAndPrincipe.svg';

export function SaoTomeAndPrincipe(props: TBaseProps) {
  return (
    <Icon {...props} name="SaoTomeAndPrincipe">
      <SVG />
    </Icon>
  );
}
