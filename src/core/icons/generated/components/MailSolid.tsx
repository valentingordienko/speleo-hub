import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MailSolid.svg';

export function MailSolid(props: TProps) {
  return (
    <Icon {...props} name="MailSolid">
      <SVG />
    </Icon>
  );
}
