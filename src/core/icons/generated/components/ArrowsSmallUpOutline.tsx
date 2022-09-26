import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowsSmallUpOutline.svg';

export function ArrowsSmallUpOutline(props: TProps) {
  return (
    <Icon {...props} name="ArrowsSmallUpOutline">
      <SVG />
    </Icon>
  );
}
