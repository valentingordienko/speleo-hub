import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MetallOutline.svg';

export function MetallOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="MetallOutline">
      <SVG />
    </Icon>
  );
}
