import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BonusRubleSolid.svg';

export function BonusRubleSolid(props: TProps) {
  return (
    <Icon {...props} name="BonusRubleSolid">
      <SVG />
    </Icon>
  );
}
