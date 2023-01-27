import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BonusRubleSolid.svg';

export function BonusRubleSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="BonusRubleSolid">
      <SVG />
    </Icon>
  );
}
