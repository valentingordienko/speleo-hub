import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TreasuryOutline.svg';

export function TreasuryOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TreasuryOutline">
      <SVG />
    </Icon>
  );
}
