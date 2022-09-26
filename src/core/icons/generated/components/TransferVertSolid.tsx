import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TransferVertSolid.svg';

export function TransferVertSolid(props: TProps) {
  return (
    <Icon {...props} name="TransferVertSolid">
      <SVG />
    </Icon>
  );
}
