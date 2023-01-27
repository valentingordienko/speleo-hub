import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowCrossOutline.svg';

export function ArrowCrossOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowCrossOutline">
      <SVG />
    </Icon>
  );
}
