import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MailOutline.svg';

export function MailOutline(props: TProps) {
  return (
    <Icon {...props} name="MailOutline">
      <SVG />
    </Icon>
  );
}
