import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortDownOutline.svg';

export function ArrowShortDownOutline(props: TProps) {
  return (
    <Icon {...props} name="ArrowShortDownOutline">
      <SVG />
    </Icon>
  );
}
