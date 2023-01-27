import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/USBSolid.svg';

export function USBSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="USBSolid">
      <SVG />
    </Icon>
  );
}
