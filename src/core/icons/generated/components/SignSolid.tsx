import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SignSolid.svg';

export function SignSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="SignSolid">
      <SVG />
    </Icon>
  );
}
