import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongRightOutline.svg';

export function ArrowLongRightOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowLongRightOutline">
      <SVG />
    </Icon>
  );
}
