import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowLongDownOutline.svg';

export function ArrowLongDownOutline(props: TProps) {
  return (
    <Icon {...props} name="ArrowLongDownOutline">
      <SVG />
    </Icon>
  );
}
