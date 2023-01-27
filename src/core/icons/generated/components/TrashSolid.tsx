import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TrashSolid.svg';

export function TrashSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="TrashSolid">
      <SVG />
    </Icon>
  );
}
