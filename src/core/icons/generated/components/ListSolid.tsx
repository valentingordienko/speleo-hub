import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ListSolid.svg';

export function ListSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ListSolid">
      <SVG />
    </Icon>
  );
}
