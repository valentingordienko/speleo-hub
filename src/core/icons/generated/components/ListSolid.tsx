import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ListSolid.svg';

export function ListSolid(props: TProps) {
  return (
    <Icon {...props} name="ListSolid">
      <SVG />
    </Icon>
  );
}
