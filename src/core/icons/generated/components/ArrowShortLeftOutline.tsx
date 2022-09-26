import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowShortLeftOutline.svg';

export function ArrowShortLeftOutline(props: TProps) {
  return (
    <Icon {...props} name="ArrowShortLeftOutline">
      <SVG />
    </Icon>
  );
}
