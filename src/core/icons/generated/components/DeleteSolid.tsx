import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteSolid.svg';

export function DeleteSolid(props: TProps) {
  return (
    <Icon {...props} name="DeleteSolid">
      <SVG />
    </Icon>
  );
}
