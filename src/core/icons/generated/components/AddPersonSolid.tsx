import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddPersonSolid.svg';

export function AddPersonSolid(props: TProps) {
  return (
    <Icon {...props} name="AddPersonSolid">
      <SVG />
    </Icon>
  );
}
