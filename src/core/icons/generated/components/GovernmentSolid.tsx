import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GovernmentSolid.svg';

export function GovernmentSolid(props: TProps) {
  return (
    <Icon {...props} name="GovernmentSolid">
      <SVG />
    </Icon>
  );
}
