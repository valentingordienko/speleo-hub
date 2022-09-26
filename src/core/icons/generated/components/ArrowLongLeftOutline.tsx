import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongLeftOutline.svg';

export function ArrowLongLeftOutline(props: TProps) {
  return (
    <Icon {...props} name="ArrowLongLeftOutline">
      <SVG />
    </Icon>
  );
}
