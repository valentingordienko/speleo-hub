import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BonusSolid.svg';

export function BonusSolid(props: TProps) {
  return (
    <Icon {...props} name="BonusSolid">
      <SVG />
    </Icon>
  );
}
