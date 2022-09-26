import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TrophyOutline.svg';

export function TrophyOutline(props: TProps) {
  return (
    <Icon {...props} name="TrophyOutline">
      <SVG />
    </Icon>
  );
}
