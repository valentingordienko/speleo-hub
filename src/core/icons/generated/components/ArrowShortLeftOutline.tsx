import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortLeftOutline.svg';

export function ArrowShortLeftOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowShortLeftOutline">
      <SVG />
    </Icon>
  );
}
