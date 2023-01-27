import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowsSmallUpOutline.svg';

export function ArrowsSmallUpOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowsSmallUpOutline">
      <SVG />
    </Icon>
  );
}
