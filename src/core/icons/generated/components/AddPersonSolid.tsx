import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddPersonSolid.svg';

export function AddPersonSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AddPersonSolid">
      <SVG />
    </Icon>
  );
}
