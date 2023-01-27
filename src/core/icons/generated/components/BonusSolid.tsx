import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BonusSolid.svg';

export function BonusSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="BonusSolid">
      <SVG />
    </Icon>
  );
}
