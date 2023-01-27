import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AntiguaAndBarbuda.svg';

export function AntiguaAndBarbuda(props: TBaseProps) {
  return (
    <Icon {...props} name="AntiguaAndBarbuda">
      <SVG />
    </Icon>
  );
}
