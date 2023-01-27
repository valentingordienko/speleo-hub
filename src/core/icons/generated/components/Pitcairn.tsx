import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Pitcairn.svg';

export function Pitcairn(props: TBaseProps) {
  return (
    <Icon {...props} name="Pitcairn">
      <SVG />
    </Icon>
  );
}
