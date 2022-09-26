import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FilterSolid.svg';

export function FilterSolid(props: TProps) {
  return (
    <Icon {...props} name="FilterSolid">
      <SVG />
    </Icon>
  );
}
