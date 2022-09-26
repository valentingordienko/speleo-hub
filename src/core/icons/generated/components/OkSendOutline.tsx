import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OkSendOutline.svg';

export function OkSendOutline(props: TProps) {
  return (
    <Icon {...props} name="OkSendOutline">
      <SVG />
    </Icon>
  );
}
