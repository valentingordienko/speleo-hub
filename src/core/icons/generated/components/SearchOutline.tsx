import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SearchOutline.svg';

export function SearchOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SearchOutline">
      <SVG />
    </Icon>
  );
}
