import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TransferHorOutline.svg';

export function TransferHorOutline(props: TProps) {
  return (
    <Icon {...props} name="TransferHorOutline">
      <SVG />
    </Icon>
  );
}
