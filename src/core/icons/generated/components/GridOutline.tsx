import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GridOutline.svg';

export function GridOutline(props: TProps) {
  return (
    <Icon {...props} name="GridOutline">
      <SVG />
    </Icon>
  );
}
