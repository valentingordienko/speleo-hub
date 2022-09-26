import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FilterOutline.svg';

export function FilterOutline(props: TProps) {
  return (
    <Icon {...props} name="FilterOutline">
      <SVG />
    </Icon>
  );
}
