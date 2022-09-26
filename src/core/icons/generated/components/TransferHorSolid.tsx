import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TransferHorSolid.svg';

export function TransferHorSolid(props: TProps) {
  return (
    <Icon {...props} name="TransferHorSolid">
      <SVG />
    </Icon>
  );
}
