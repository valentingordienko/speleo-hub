import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FilterSolid.svg';

export function FilterSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FilterSolid">
      <SVG />
    </Icon>
  );
}
