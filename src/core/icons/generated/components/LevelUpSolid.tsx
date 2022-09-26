import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LevelUpSolid.svg';

export function LevelUpSolid(props: TProps) {
  return (
    <Icon {...props} name="LevelUpSolid">
      <SVG />
    </Icon>
  );
}
