import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PrintSolid.svg';

export function PrintSolid(props: TProps) {
  return (
    <Icon {...props} name="PrintSolid">
      <SVG />
    </Icon>
  );
}
