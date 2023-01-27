import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MailSolid.svg';

export function MailSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="MailSolid">
      <SVG />
    </Icon>
  );
}
