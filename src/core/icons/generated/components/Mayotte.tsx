import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Mayotte.svg';

export function Mayotte(props: TProps) {
  return (
    <Icon {...props} name="Mayotte">
      <SVG />
    </Icon>
  );
}
