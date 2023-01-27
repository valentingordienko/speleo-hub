import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TrophyOutline.svg';

export function TrophyOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TrophyOutline">
      <SVG />
    </Icon>
  );
}
