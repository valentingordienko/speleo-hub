import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MailOutline.svg';

export function MailOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="MailOutline">
      <SVG />
    </Icon>
  );
}
