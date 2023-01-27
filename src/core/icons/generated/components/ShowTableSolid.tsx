import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ShowTableSolid.svg';

export function ShowTableSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ShowTableSolid">
      <SVG />
    </Icon>
  );
}
