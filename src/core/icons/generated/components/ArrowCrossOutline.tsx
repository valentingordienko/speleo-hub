import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowCrossOutline.svg';

export function ArrowCrossOutline(props: TProps) {
  return (
    <Icon {...props} name="ArrowCrossOutline">
      <SVG />
    </Icon>
  );
}
