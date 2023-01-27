import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FilterOutline.svg';

export function FilterOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FilterOutline">
      <SVG />
    </Icon>
  );
}
