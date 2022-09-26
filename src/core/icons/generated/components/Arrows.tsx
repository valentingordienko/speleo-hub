import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Arrows.svg';

export function Arrows(props: TProps) {
  return (
    <Icon {...props} name="Arrows">
      <SVG />
    </Icon>
  );
}
