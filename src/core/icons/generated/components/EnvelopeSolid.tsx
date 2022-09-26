import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EnvelopeSolid.svg';

export function EnvelopeSolid(props: TProps) {
  return (
    <Icon {...props} name="EnvelopeSolid">
      <SVG />
    </Icon>
  );
}
