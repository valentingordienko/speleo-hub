import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongUpOutline.svg';

export function ArrowLongUpOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowLongUpOutline">
      <SVG />
    </Icon>
  );
}
