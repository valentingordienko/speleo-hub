import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ShowTableSolid.svg';

export function ShowTableSolid(props: TProps) {
  return (
    <Icon {...props} name="ShowTableSolid">
      <SVG />
    </Icon>
  );
}
