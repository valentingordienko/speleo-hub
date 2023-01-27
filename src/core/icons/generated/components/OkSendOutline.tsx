import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OkSendOutline.svg';

export function OkSendOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="OkSendOutline">
      <SVG />
    </Icon>
  );
}
