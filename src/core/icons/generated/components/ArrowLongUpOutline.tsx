import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongUpOutline.svg';

export function ArrowLongUpOutline(props: TProps) {
  return (
    <Icon {...props} name="ArrowLongUpOutline">
      <SVG />
    </Icon>
  );
}
