import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongRightOutline.svg';

export function ArrowLongRightOutline(props: TProps) {
  return (
    <Icon {...props} name="ArrowLongRightOutline">
      <SVG />
    </Icon>
  );
}
