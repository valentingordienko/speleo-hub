import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LevelUpOutline.svg';

export function LevelUpOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="LevelUpOutline">
      <SVG />
    </Icon>
  );
}
