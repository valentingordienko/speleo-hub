import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Mayotte.svg';

export function Mayotte(props: TBaseProps) {
  return (
    <Icon {...props} name="Mayotte">
      <SVG />
    </Icon>
  );
}
