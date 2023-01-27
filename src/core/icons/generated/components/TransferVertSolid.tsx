import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TransferVertSolid.svg';

export function TransferVertSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="TransferVertSolid">
      <SVG />
    </Icon>
  );
}
