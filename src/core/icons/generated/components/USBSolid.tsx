import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/USBSolid.svg';

export function USBSolid(props: TProps) {
  return (
    <Icon {...props} name="USBSolid">
      <SVG />
    </Icon>
  );
}
