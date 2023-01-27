import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TransferVertOutline.svg';

export function TransferVertOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TransferVertOutline">
      <SVG />
    </Icon>
  );
}
