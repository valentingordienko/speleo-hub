import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteSolid.svg';

export function DeleteSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DeleteSolid">
      <SVG />
    </Icon>
  );
}
