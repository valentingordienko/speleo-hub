import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/InfoSolid.svg';

export function InfoSolid(props: TProps) {
  return (
    <Icon {...props} name="InfoSolid">
      <SVG />
    </Icon>
  );
}
