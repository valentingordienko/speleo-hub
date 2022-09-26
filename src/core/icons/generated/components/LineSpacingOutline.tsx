import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LineSpacingOutline.svg';

export function LineSpacingOutline(props: TProps) {
  return (
    <Icon {...props} name="LineSpacingOutline">
      <SVG />
    </Icon>
  );
}
