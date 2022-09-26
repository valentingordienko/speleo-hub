import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SearchOutline.svg';

export function SearchOutline(props: TProps) {
  return (
    <Icon {...props} name="SearchOutline">
      <SVG />
    </Icon>
  );
}
