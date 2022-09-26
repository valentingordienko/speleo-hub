import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PensionSolid.svg';

export function PensionSolid(props: TProps) {
  return (
    <Icon {...props} name="PensionSolid">
      <SVG />
    </Icon>
  );
}
