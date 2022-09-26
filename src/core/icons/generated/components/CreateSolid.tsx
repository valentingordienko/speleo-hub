import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreateSolid.svg';

export function CreateSolid(props: TProps) {
  return (
    <Icon {...props} name="CreateSolid">
      <SVG />
    </Icon>
  );
}
