import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Redact.svg';

export function Redact(props: TBaseProps) {
  return (
    <Icon {...props} name="Redact">
      <SVG />
    </Icon>
  );
}
