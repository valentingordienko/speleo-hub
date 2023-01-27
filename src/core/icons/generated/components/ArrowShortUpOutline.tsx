import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortUpOutline.svg';

export function ArrowShortUpOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowShortUpOutline">
      <SVG />
    </Icon>
  );
}
