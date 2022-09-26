import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MetallOutline.svg';

export function MetallOutline(props: TProps) {
  return (
    <Icon {...props} name="MetallOutline">
      <SVG />
    </Icon>
  );
}
