import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TreasuryOutline.svg';

export function TreasuryOutline(props: TProps) {
  return (
    <Icon {...props} name="TreasuryOutline">
      <SVG />
    </Icon>
  );
}
