import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortRightOutline.svg';

export function ArrowShortRightOutline(props: TProps) {
  return (
    <Icon {...props} name="ArrowShortRightOutline">
      <SVG />
    </Icon>
  );
}
