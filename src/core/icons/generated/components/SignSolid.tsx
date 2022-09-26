import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SignSolid.svg';

export function SignSolid(props: TProps) {
  return (
    <Icon {...props} name="SignSolid">
      <SVG />
    </Icon>
  );
}
