import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortDownOutline.svg';

export function ArrowShortDownOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowShortDownOutline">
      <SVG />
    </Icon>
  );
}
