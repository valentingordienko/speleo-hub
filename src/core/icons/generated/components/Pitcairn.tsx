import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Pitcairn.svg';

export function Pitcairn(props: TProps) {
  return (
    <Icon {...props} name="Pitcairn">
      <SVG />
    </Icon>
  );
}
