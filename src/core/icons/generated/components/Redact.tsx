import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Redact.svg';

export function Redact(props: TProps) {
  return (
    <Icon {...props} name="Redact">
      <SVG />
    </Icon>
  );
}
