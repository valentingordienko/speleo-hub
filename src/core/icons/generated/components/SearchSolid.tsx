import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SearchSolid.svg';

export function SearchSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="SearchSolid">
      <SVG />
    </Icon>
  );
}
