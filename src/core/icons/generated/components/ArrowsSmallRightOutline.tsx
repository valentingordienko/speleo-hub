import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowsSmallRightOutline.svg';

export function ArrowsSmallRightOutline(props: TProps) {
  return (
    <Icon {...props} name="ArrowsSmallRightOutline">
      <SVG />
    </Icon>
  );
}
