import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TransferHorOutline.svg';

export function TransferHorOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TransferHorOutline">
      <SVG />
    </Icon>
  );
}
