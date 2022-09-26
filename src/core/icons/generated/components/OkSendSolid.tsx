import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OkSendSolid.svg';

export function OkSendSolid(props: TProps) {
  return (
    <Icon {...props} name="OkSendSolid">
      <SVG />
    </Icon>
  );
}
