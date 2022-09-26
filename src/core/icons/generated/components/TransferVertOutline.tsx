import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TransferVertOutline.svg';

export function TransferVertOutline(props: TProps) {
  return (
    <Icon {...props} name="TransferVertOutline">
      <SVG />
    </Icon>
  );
}
