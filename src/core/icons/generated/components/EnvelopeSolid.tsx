import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EnvelopeSolid.svg';

export function EnvelopeSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="EnvelopeSolid">
      <SVG />
    </Icon>
  );
}
