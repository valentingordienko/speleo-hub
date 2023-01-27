import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortRightOutline.svg';

export function ArrowShortRightOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowShortRightOutline">
      <SVG />
    </Icon>
  );
}
