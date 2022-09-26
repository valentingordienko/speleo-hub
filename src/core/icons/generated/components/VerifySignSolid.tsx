import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VerifySignSolid.svg';

export function VerifySignSolid(props: TProps) {
  return (
    <Icon {...props} name="VerifySignSolid">
      <SVG />
    </Icon>
  );
}
