import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OkSendSolid.svg';

export function OkSendSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="OkSendSolid">
      <SVG />
    </Icon>
  );
}
