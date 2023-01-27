import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GovernmentSolid.svg';

export function GovernmentSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="GovernmentSolid">
      <SVG />
    </Icon>
  );
}
