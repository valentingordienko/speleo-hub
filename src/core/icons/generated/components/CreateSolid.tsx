import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreateSolid.svg';

export function CreateSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CreateSolid">
      <SVG />
    </Icon>
  );
}
