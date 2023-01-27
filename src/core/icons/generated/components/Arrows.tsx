import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Arrows.svg';

export function Arrows(props: TBaseProps) {
  return (
    <Icon {...props} name="Arrows">
      <SVG />
    </Icon>
  );
}
