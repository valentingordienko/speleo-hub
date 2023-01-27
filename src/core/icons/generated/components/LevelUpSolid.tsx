import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LevelUpSolid.svg';

export function LevelUpSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="LevelUpSolid">
      <SVG />
    </Icon>
  );
}
