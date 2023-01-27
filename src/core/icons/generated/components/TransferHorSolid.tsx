import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TransferHorSolid.svg';

export function TransferHorSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="TransferHorSolid">
      <SVG />
    </Icon>
  );
}
