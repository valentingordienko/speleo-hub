import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LineSpacingOutline.svg';

export function LineSpacingOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="LineSpacingOutline">
      <SVG />
    </Icon>
  );
}
