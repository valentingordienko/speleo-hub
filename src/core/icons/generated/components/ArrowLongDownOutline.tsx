import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongDownOutline.svg';

export function ArrowLongDownOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowLongDownOutline">
      <SVG />
    </Icon>
  );
}
