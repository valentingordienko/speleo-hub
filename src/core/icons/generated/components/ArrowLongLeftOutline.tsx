import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongLeftOutline.svg';

export function ArrowLongLeftOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowLongLeftOutline">
      <SVG />
    </Icon>
  );
}
