import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LevelUpOutline.svg';

export function LevelUpOutline(props: TProps) {
  return (
    <Icon {...props} name="LevelUpOutline">
      <SVG />
    </Icon>
  );
}
