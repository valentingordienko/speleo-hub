import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SearchSolid.svg';

export function SearchSolid(props: TProps) {
  return (
    <Icon {...props} name="SearchSolid">
      <SVG />
    </Icon>
  );
}
