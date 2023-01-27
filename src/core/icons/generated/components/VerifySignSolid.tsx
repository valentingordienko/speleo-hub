import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VerifySignSolid.svg';

export function VerifySignSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="VerifySignSolid">
      <SVG />
    </Icon>
  );
}
