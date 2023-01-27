import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GridOutline.svg';

export function GridOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="GridOutline">
      <SVG />
    </Icon>
  );
}
