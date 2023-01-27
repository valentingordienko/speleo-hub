import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowsSmallRightOutline.svg';

export function ArrowsSmallRightOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowsSmallRightOutline">
      <SVG />
    </Icon>
  );
}
