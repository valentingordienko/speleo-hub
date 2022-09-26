import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AntiguaAndBarbuda.svg';

export function AntiguaAndBarbuda(props: TProps) {
  return (
    <Icon {...props} name="AntiguaAndBarbuda">
      <SVG />
    </Icon>
  );
}
