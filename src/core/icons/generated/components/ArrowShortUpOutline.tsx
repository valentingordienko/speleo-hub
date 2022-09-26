import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortUpOutline.svg';

export function ArrowShortUpOutline(props: TProps) {
  return (
    <Icon {...props} name="ArrowShortUpOutline">
      <SVG />
    </Icon>
  );
}
