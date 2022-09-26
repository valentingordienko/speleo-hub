import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TrashSolid.svg';

export function TrashSolid(props: TProps) {
  return (
    <Icon {...props} name="TrashSolid">
      <SVG />
    </Icon>
  );
}
